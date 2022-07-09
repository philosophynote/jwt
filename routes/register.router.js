import express  from "express"
import { register } from "../controllers/register.controller.js"

export const registerRouter = express.Router();

registerRouter.post("/", (req,res) => register(req,res))