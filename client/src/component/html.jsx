import axios from "axios";
import downloadFile from "./dowload";

export default async function convertHtml(html) {
  try {
    const res = await axios.post(
      "http://localhost:3000/html-to-pdf",
      { html },
      { responseType: "blob" }
    );

    downloadFile(res.data, "html.pdf");
    
  } catch {
    alert("HTML to PDF failed");
  }
}
