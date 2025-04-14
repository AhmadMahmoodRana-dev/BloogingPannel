import { Router } from "express";
import { register,login,profile,updateProfile,logout } from "../controllers/auth.controller.js";
import auth from "../middlewares/auth.middleware.js";

const Authentication = Router();

Authentication.post('/register', register);
Authentication.post('/login', login);
Authentication.get('/profile', auth, profile);
Authentication.put('/profile', auth, updateProfile);
Authentication.post('/logout', auth, logout);


export default Authentication;