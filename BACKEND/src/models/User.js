import { Schema, model } from "mongoose";

const userShema = new Schema({
    email: String,
    password: String,
}, {
    timestamps: true,
})

export const User = model("User", userShema);