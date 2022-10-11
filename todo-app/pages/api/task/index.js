import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;

  //koneksi ke database
  await dbConnect();

  //membuat task baru
  if (method === "POST") {
    try {
      const newTask = await new Task(req.body).save();
      res
        .status(201)
        .json({ data: newTask, message: "Task berhasil ditambahkan" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }

  //menampilkan task
  if (method === "GET") {
    try {
      const tasks = await Task.find();
      res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
};
