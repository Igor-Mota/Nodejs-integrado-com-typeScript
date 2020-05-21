import {Router} from "express";
import userController from "./controllers/userController";
const routes = Router();

routes.get("/user", userController.index);

routes.post("/user", userController.creatUser)
export default routes