import { Schema, model } from "mongoose";

const imageSchema = new Schema({
    url: String,
    category: String,
})

export const Image = model("Image", imageSchema);