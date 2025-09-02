import mongoose from "mongoose";
import bcrypt from "bcrypt";
import e from "express";

const userSchema = new mongoose.Schema(
  {
    authType : {
      type : String,
      default : "Normal",
      enum : ["Normal","Google","GitHub"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      minlength: 6,
      select: false, // don't return by default for security
    },
    isLoggedIn : {
      type : Boolean,
      default : false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      maxlength: 250,
      trim: true,
    },
    profile_url: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // default avatar
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
