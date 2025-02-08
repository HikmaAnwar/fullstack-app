import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { username, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { username, email });
  res.json({ message: "User updated successfully" });
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};
