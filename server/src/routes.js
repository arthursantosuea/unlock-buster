import express from "express";
import UserController from "./controllers/UserController.js";

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users/create', UserController.create);

export default routes;