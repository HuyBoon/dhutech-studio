import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USER_MAIL, // Email gửi
        pass: process.env.USER_PASSWORD, // Mật khẩu email
    },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    await transporter.sendMail({
        from: `"KimVinhStore" <${process.env.USER_MAIL}>`,
        to,
        subject,
        html,
    });
};
