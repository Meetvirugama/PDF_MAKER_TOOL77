import express from "express";
import multer from "multer";
import fs from "fs";
import { PDFDocument } from "pdf-lib";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.array("files"), async (req, res) => {
  try {
    console.log("FILES:", req.files?.length);

    const pdfDoc = await PDFDocument.create();

    for (const file of req.files) {
      const bytes = fs.readFileSync(file.path);

      let image;
      if (file.mimetype.includes("png")) {
        image = await pdfDoc.embedPng(bytes);
      } else {
        image = await pdfDoc.embedJpg(bytes);
      }

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

      fs.unlinkSync(file.path);
    }

    const pdfBytes = await pdfDoc.save();
    res.setHeader("Content-Type", "application/pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.error("BACKEND ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
