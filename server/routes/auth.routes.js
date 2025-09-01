import {Router} from "express";
import passport from "../utils/passport.js";
import { githubCallback, googleCallback, login, logout, register } from "../controllers/auth.controller.js";

export const AuthRoutes = Router();
export const OAuthRoutes = Router();

// Local Auth
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.post("/logout", logout);

// Google OAuth
OAuthRoutes.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
OAuthRoutes.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login",session : false }), googleCallback);

// GitHub OAuth
OAuthRoutes.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
OAuthRoutes.get("/github/callback", passport.authenticate("github", { failureRedirect: "/login",session:false }), githubCallback);
