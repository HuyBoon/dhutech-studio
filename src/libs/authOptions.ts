import clientPromise from "@/libs/mongoConnect";
import bcrypt from "bcrypt";
import { User } from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { connectToDatabase } from "./connectToDatabase";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing Google OAuth environment variables: GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET");
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
            profile(profile) {
                if (!profile) {
                    throw new Error("Google profile is undefined");
                }
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    avatar: profile.picture || "",
                    active: profile.email_verified,
                    admin: false,
                };
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                const email = credentials?.email;
                const password = credentials?.password;

                if (!email || !password) {
                    throw new Error(JSON.stringify({ errorCode: 1, errorMessage: "Email và mật khẩu là bắt buộc." }));
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    throw new Error(JSON.stringify({ errorCode: 2, errorMessage: "Email không hợp lệ. Vui lòng kiểm tra lại." }));
                }

                await connectToDatabase();
                const user = await User.findOne({ email });

                if (!user) {
                    throw new Error(JSON.stringify({ errorCode: 3, errorMessage: "Tài khoản không tồn tại." }));
                }

                const passwordOk = await bcrypt.compare(password, user.password);
                if (!passwordOk) {
                    throw new Error(JSON.stringify({ errorCode: 4, errorMessage: "Mật khẩu không đúng." }));
                }

                if (!user.active) {
                    throw new Error(JSON.stringify({ errorCode: 5, errorMessage: "Tài khoản chưa được xác minh. Vui lòng kiểm tra email." }));
                }


                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    admin: user.admin || false,
                    active: !!user.active,
                    avatar: user.avatar || "",

                };
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === "google") {
                if (!profile) {
                    throw new Error("Google profile is undefined");
                }

                const existingUser = await User.findOne({ email: user.email });

                if (existingUser) {

                    if (!existingUser.googleId) {
                        existingUser.googleId = profile.sub;
                        await existingUser.save();
                    } else if (existingUser.googleId !== profile.sub) {

                        throw new Error("Email đã được sử dụng với một tài khoản Google khác.");
                    }
                } else {
                    // Nếu tài khoản chưa tồn tại, tạo mới
                    var usernew = {
                        email: profile.email,
                        name: profile.name,
                        avatar: profile.picture,
                        active: true,
                        admin: false,
                        googleId: profile.sub,
                    }
                    await User.create(usernew);
                }
            }

            return true;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.googleId = user.googleId;
                token.admin = user.admin;
                token.avatar = user.avatar;
                token.active = Boolean(user.active);
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    googleId: token.googleId,
                    active: token.active,
                    admin: token.admin,
                    avatar: token.avatar,
                    accountType: token.accountType,
                },
            };
        },
    },

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 60 * 60,
    },
};
