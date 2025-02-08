import express from "express";
import { auth, isAdmin } from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", auth, isAdmin, getAllUsers);
router.get("/:id", auth, getUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, isAdmin, deleteUser);

export default router;
