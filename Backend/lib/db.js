import mongoose from "mongoose";

export const connectDb = async() =>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`mongodb connected: ${conn.connection.host}`);
    }catch(error){
      console.log("mongodb connection failed", error);
      process.exit(1);
    }
}