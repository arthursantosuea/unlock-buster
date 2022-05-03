import User from "../models/User.js";

export default {
  async index(request, response) {
    const users = await User.findAll();
    response.status(200).json(users);
  },
  async create(request, response) {
    const { name, email, password } = request.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    return response.status(200).json({
      message: "Usuário criado com sucesso",
    });
  },
};
