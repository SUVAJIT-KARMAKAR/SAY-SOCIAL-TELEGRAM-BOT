// IMPORTING THE REQUIRED FILE DIRECTORIES IN THE WORK SPACE
import mongoose from "mongoose";



// EXPORTING THE CONNECTION TO THE DATABASE
export default () => {
      return mongoose.connect(process.env.MONGO_CONNECT_STRING);
}