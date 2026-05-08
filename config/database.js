import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv to load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
    // Datebase Connect
    mongoose.connect(process.env.Mongo_URL)
    .then(()=>{
      console.log('Database Connected');
    })
    .catch((err)=>{
      console.log('Database Connection Failed', err);
    })
}
