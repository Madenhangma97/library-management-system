import Student from "../models/StudentModel.js";

const createStudent = async (data) => {
  return await Student.create(data);
};

const getAllStudents = async () => {
  return await Student.find();
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

const getStudentStats = async () => {
  const totalStudents = await Student.countDocuments();
  const activeStudents = await Student.countDocuments({ accountStatus: "Active" });

  const withBorrowedBooks = await Student.countDocuments({ borrowingLimit: { $lt: 5 } });

  const faculties = await Student.distinct("faculty"); 

  return {
    totalStudents,
    activeStudents,
    withBorrowedBooks,
    totalFaculties: faculties.length,
  };
};

export default {
  createStudent,
  getAllStudents,
  getStudentById,
  deleteStudent,
  getStudentStats,
};