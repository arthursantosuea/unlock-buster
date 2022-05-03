import express from "express";
import UserController from "./controllers/UserController.js";
// import verifyToken from "./middleware/verifyToken.js";

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users/create', UserController.create);
routes.post('/users/login', UserController.login);

export default routes;