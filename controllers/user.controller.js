import { User } from "../mongodb/models/user.js";
import {
  hashPassword,
  validateEmail,
  comparePasswords,
} from "../helpers/user.helpers.js";

export const createUser = async (req, res) => {
  try {
    //to-do: avatar precisa ser em formato de arquivo e
    //deve poder subir para o cloudinary

    const { name, email, password, avatar } = req.body;

    const result = await User.findOne({ email: email })

    if (result) {
      return res.status(400).json({ message: "User already exists" });
    }

    validateEmail(email);

    const user = new User({
      name,
      email,
      password: hashPassword(password),
      avatar,
    });

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "_id name email avatar").exec();
    const amount = { amount: users.length }

    res.status(200).json([amount, users]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, avatar } = req.body;

    if (email) validateEmail(email);

    const user = await User.findByIdAndUpdate(id, { name, email, avatar });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await comparePasswords(user.password, password);

    await User.findByIdAndUpdate(id, { password: hashPassword(password) });

    await res.status(200).json({ message: "Password updated successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.deleteOne({ _id: id });

    if (user.deletedCount == 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await res.status(200).json({ message: "User deleted successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
