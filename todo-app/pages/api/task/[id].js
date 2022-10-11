import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  //koneksi ke database
  await dbConnect();

  //mengedit task dengan id
  if (method === "PUT") {
    try {
      const result = await Task.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res
        .status(200)
        .json({ data: result, message: "task berhasil diperbarui" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }

  //menghapus task dengan id
  if (method === "DELETE") {
    try {
      await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Task berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
};
