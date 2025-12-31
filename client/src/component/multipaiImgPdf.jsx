import axios from "axios";
import downloadFile from "./dowload";

const uploadMultipleImages = async (files, route) => {
  if (!files || files.length === 0) return;

  const formData = new FormData();
  files.forEach(file => formData.append("files", file));

  try {
    const res = await axios.post(
      `http://localhost:3000/${route}`, // ⚠️ MATCH BACKEND PORT
      formData,
      { responseType: "blob" }
    );

    downloadFile(res.data, "output.pdf");
  } catch (err) {
    console.error(err);
    alert("Conversion failed");
  }
};

export default uploadMultipleImages;
