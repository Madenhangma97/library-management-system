import express from "express";
import studentController from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", studentController.createStudent);
router.get("/", studentController.getAllStudents);
router.get("/stats", studentController.getStudentStats);
router.get("/:id", studentController.getStudentById);
router.delete("/:id", studentController.deleteStudent);

export default router;