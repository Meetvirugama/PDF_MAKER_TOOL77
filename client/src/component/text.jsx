import axios from "axios";
import downloadFile from "./dowload";

export default async function convertText(text) {
  try {
    const res = await axios.post(
      "http://localhost:3000/text-to-pdf",
      { text },
      { responseType: "blob" }
    );

    downloadFile(res.data, "text.pdf");
  } catch {
    alert("Text to PDF failed");
  }
}
