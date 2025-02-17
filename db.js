import mongoose from "mongoose";
//function to connect database
export default function dbConnect() {
  try {
    //passing connection string from environment variables
    mongoose.connect(process.env.connection_string);
    console.log("Database connnected");
  } catch (error) {
    console.log("Error connecting database");
  }
}
