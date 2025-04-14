import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import BlacklistedToken from "../models/BlacklistedToken.schema.js";
import User from "../models/User.schema.js";

// Register
export const  register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).send("Email already exists");

  const hashed = await bcrypt.hash(password, 10);

  const tech = new User({ name, email, password: hashed, phone });
  await tech.save();
  res.send("User registered");
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find User
    const tech = await User.findOne({ email });
    if (!tech) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // 2. Check password
    const valid = await bcrypt.compare(password, tech.password);
    if (!valid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // 3. Sign token with 7d expiry
    const token = jwt.sign(
      { _id: tech._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    // 4. Send token (and any other data you like)
    return res.status(200).json({
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Profile
export const profile = async (req, res) => {
  console.log(req,"request")
  const tech = await User.findById(req.User._id).select(
    "-password"
  );
  res.send(tech);
};

// Update Profile
export const updateProfile = async (req, res) => {
  const tech = await User.findByIdAndUpdate(
    req.User._id,
    req.body,
    { new: true }
  );
  res.send(tech);
};


// Logout
export const logout = async (req, res) => {
  const header = req.header("Authorization");
  const token = header?.split(" ")[1];
  if (!token) return res.status(400).send("No token provided");

  // decode without verifying so we can read exp
  const decoded = jwt.decode(token) || {};
  let expiresAt;

  if (decoded.exp) {
    // exp is in seconds
    expiresAt = new Date(decoded.exp * 1000);
  } else {
    // fallback TTL: e.g. blacklist for 7 days
    expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  }

  await new BlacklistedToken({ token, expiresAt }).save();
  res.send("Logged out successfully");
};
