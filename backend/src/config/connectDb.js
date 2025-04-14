import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}${process.env.DB_NAME}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1); 
  }
};

export default connectDb;
