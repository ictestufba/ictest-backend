import bcrypt from "bcrypt";
import validator from "email-validator";

export const hashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const validateEmail = (email) => {
  if (validator.validate(email)) {
    return true;
  } else {
    throw new Error("Invalid email");
  }
};

export const comparePasswords = async (oldPass, newPass) => {
  const is_equal = await bcrypt.compare(newPass, oldPass);

  if (is_equal) {
    throw new Error("Same password as before");
  } else {
    return true;
  }
};
