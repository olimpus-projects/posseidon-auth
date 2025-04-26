import mongoose from "mongoose";

export const db = mongoose.connection.useDb(`${process.env.DB_NAME}`);