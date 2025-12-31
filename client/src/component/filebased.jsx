import axios from "axios";
import downloadFile from "./dowload";

async function uploadFile(file, route, filename, extra = {}) {
  const formData = new FormData();
  formData.append("file", file);

  if (extra.pages) formData.append("pages", extra.pages);
  if (extra.password) formData.append("password", extra.password);

  const res = await axios.post(
    `http://localhost:5000/${route}`,
    formData,
    { responseType: "blob" }
  );

  downloadFile(res.data, filename);
}

export default uploadFile;
