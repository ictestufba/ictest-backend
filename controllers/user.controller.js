import { User } from "../mongodb/models/user.js";
import { hashPassword, validateEmail } from "../helpers/user.helpers.js";

export const createUser = async (req, res) => {
  try {
    //to-do: avatar precisa ser em formato de arquivo e
    //deve poder subir para o cloudinary
    const { name, email, password, avatar } = req.body;

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
