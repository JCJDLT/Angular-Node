import { Image } from "../models/Image.js";

export const renderImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export const insertImages = async (req, res) => {
  try {
    const { url, category } = req.body;
    const newImage = new Image({ url, category });
    await newImage.save();
    res.status(201).send('Image successfully saved');
  } catch (error) {
    res.status(500).send('Error saving image');
  }
};