import jwt from "jsonwebtoken";
import BlacklistedToken from "../models/BlacklistedToken.schema.js";
const auth = async (req, res, next) => {
  try {
    const header = req.header('Authorization');
    const token = header?.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    const isBlacklisted = await BlacklistedToken.findOne({ token });
    if (isBlacklisted) return res.status(401).send('Token expired or blacklisted.');

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.User = verified;
    next();
  } catch (err) {
    res.status(401).send('Invalid or expired token');
  }
};

export default auth;
