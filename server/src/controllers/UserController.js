import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  async login(request, response) {
    const { email, password } = request.body;
    const SECRET = process.env.SECRET;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return response.status(401).json({
        message: "Usuário não encontrado",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response.status(401).json({
        message: "Senha inválida",
      });
    }
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "1d",
    });
    return response.status(200).json({
      authenticated: true,
      token,
    });
  },
};
