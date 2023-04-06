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
    throw new Error("Email inválido.");
  }
};
