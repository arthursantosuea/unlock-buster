import User from "../models/User.js";
import bcrypt from "bcrypt";

export default {
  async index(request, response) {
    const users = await User.findAll();
    response.status(200).json(users);
  },
  async create(request, response) {
    const { name, email, password } = request.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    return response.status(200).json({
      message: "Usuário criado com sucesso",
    });
  },
};
