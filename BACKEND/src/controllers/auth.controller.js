import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const renderAuth = (req, res) => {
    res.send("Authorization");
}

export const signup = async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({ token });
};

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("El email no existe");
    if (user.password !== password) return res.status(401).send("El password es incorrecto");
    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token });
};