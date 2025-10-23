import mongoose from 'mongoose';

export const connectMongoose = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("Mongoose connected");
    }
};