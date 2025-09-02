import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // assume you have a User model
import User from "../model/user.model.js";
import { pinoLogger } from "../utils/pinoLogger.js";
import { envLoader } from "../utils/envLoader.js";

// Register
export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      pinoLogger.error("All fields Are Required")
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({ email, username, password : hashedPassword });
    const token = jwt.sign({ id: user._id }, envLoader("JWT_SECRET"), { expiresIn: "1d" });
    user.isLoggedIn = true;
    await user.save();
  res.set("Authorization", `Bearer ${token}`);
    const {password:_,updatedAt,__v,...userData} = user._doc
    res.status(201).json({ message: "User registered", user: userData });
  } catch (error) {
    pinoLogger.error({"error" : error.message},"Happened in Register controller")
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password ,username } = req.body;
    let user;
    if(email){
       user = await User.findOne({email }).select("+password");
    }
    if(username){
       user = await User.findOne({username }).select("+password");
    }
    if (!user) return res.status(400).json({ message: "User not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    user.isLoggedIn = true;
    await user.save();
    const token = jwt.sign({ id: user._id }, envLoader("JWT_SECRET"), { expiresIn: "1d" });
  res.set("Authorization", `Bearer ${token}`);
    const {password:_,updatedAt,__v,...userData} = user._doc
    res.status(200).json({ message: "Login successful", data : userData });
  } catch (error) {
    pinoLogger.error({error :error},"Error occurred in Login controller")
    console.log(error);
    
    res.status(500).json({ message: "Server error", error});
  }
};

// Logout (JWT-based)
export const logout =async (req, res) => {
  const token = req.headers.token ?? ""
  pinoLogger.info(`token is ${token}`)
  if(!token)  return res.status(400).json({ message: "Invalid credentials" });

  const data =await  jwt.verify(token,envLoader("JWT_SECRET"));
  pinoLogger.info({data},"ok")
  const  user = await User.findById(data.id) 
  if (!user) return res.status(400).json({ message: "User not Found" });
  user.isLoggedIn = false
  await user.save();  
  // For JWT, logout is handled client-side by deleting the token
  res.status(200).json({ message: "Logged out successfully (remove token client-side)" });
};

// Google OAuth Callback
export const googleCallback = (req, res) => {
  // Passport attaches the user to req.user
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
res.set("Authorization", `Bearer ${token}`);
  res.status(200).json({ message: "Google OAuth success", data :req?.user });
};

// GitHub OAuth Callback
export const githubCallback = (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.set("Authorization", `Bearer ${token}`);
  res.status(200).json({ message: "GitHub OAuth success", data : req?.user });
};
