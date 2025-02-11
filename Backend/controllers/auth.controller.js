import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {sendWelcomeEmail} from "../emails/emailHandlers.js";

export const signup = async(req, res) =>{
   try{
     const {name, username, email, password} = req.body;

     if(!name || !username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
     }
     const exitingEmail = await User.findOne({email});
     if(exitingEmail){
        return res.status(400).json({message: "Email already exists"});
     }
     const exitingUsername = await User.findOne({username});
     if(exitingUsername){
        return res.status(400).json({message: "Username already exists"});
     }
     if(password.length < 6){
        return res.status(400).json({message: "Password must be at least 6 characters"});
     }
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);
     const user = await User.create({name, username, email, password: hashedPassword});
     await user.save();

     const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3d"});
     res.cookie("jwt-linkedin", token, {
         httpOnly: true, // prevent xss attack
         maxAge: 1000 * 60 * 60 * 24 * 3 ,// 3 days
         sameSite : "strict", // prevent csrf attack
         secure: process.env.NODE_ENV === "production" // prevent man-in-the middle attack
     });
     res.status(201).json({message: "User created successfully"});
      // postman -> http://localhost:5000/api/v1/auth/signup

     // send welcome email
      
     const profileUrl = process.env.CLIENT_URL + "/profile/" +user.username

     try{
      await sendWelcomeEmail(user.email, user.name, profileUrl);
     }catch(emailError){
        console.log("error in sending welcome email", emailError.message);
     }
   }catch(error){
    console.log("error in signup", error.message);
    res.status(500).json({message: "Internal server error"});
   }
}

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Check if user exists
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Check password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Create and send token
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });
		await res.cookie("jwt-linkedin", token, {
			httpOnly: true,
			maxAge: 3 * 24 * 60 * 60 * 1000,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
		});

		res.json({ message: "Logged in successfully" });
	} catch (error) {
		console.error("Error in login controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};

 export const logout = (req, res) =>{
    res.clearCookie("jwt-linkedin");
    res.json({message: "Logged out successfully"});
 }

 export const getCurrentUser = async (req, res) => {
	try {
		res.json(req.user);
	} catch (error) {
		console.error("Error in getCurrentUser controller:", error);
		res.status(500).json({ message: "Server error" });
	}
};