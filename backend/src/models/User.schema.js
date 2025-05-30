import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String},
});

const User = mongoose.model("User", UserSchema);
export default User;
