import express from "express";
import multer from "multer";
import fs from "fs";
import { PDFDocument } from "pdf-lib";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.array("files"), async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({ error: "At least 2 PDFs required" });
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of req.files) {
      const pdfBytes = fs.readFileSync(file.path);
      const pdf = await PDFDocument.load(pdfBytes);

      const pages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );

      pages.forEach(page => mergedPdf.addPage(page));

      fs.unlinkSync(file.path);
    }

    const mergedBytes = await mergedPdf.save();

    res.setHeader("Content-Type", "application/pdf");
    res.send(Buffer.from(mergedBytes));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Merge PDF failed" });
  }
});

export default router;
