import express from "express";
import cors from "cors";

import imgsToPdf from "./routes/imgsToPdf.js";
import excelToPdf from "./routes/excelToPdf.js";
import textToPdf from "./routes/textToPdf.js";
import compressPdf from "./routes/compressPdf.js";
import htmlToPdf from "./routes/htmlToPdf.js";
import mergePdf from "./routes/mergePdf.js"

const app = express();

app.use(cors());
app.use(express.json());


app.use("/multi-image-to-pdf" , imgsToPdf);
app.use("/excel-to-pdf", excelToPdf);
app.use("/text-to-pdf", textToPdf);
app.use("/compress-pdf", compressPdf);
app.use("/html-to-pdf", htmlToPdf);
app.use("/merge-pdf" , mergePdf);

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
