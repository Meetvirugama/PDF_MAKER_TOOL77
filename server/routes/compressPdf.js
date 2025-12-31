import express from "express";
import multer from "multer";
import { PDFDocument } from "pdf-lib";
import fs, { readFileSync } from "fs";
import { error } from "console";
import { exec } from "child_process";

const router = express.Router();

const upload = multer( {dest : "uploads/"});

router.post("/" , upload.single("file") , async (req , res) => {
    try {

        const inputPath = req.file.path;
        const outputPath = `uploads/compressed-${Date.now()}.pdf`;

        const command = `
      gs -sDEVICE=pdfwrite \
      -dCompatibilityLevel=1.4 \
      -dPDFSETTINGS=/ebook \
      -dNOPAUSE -dQUIET -dBATCH \
      -sOutputFile=${outputPath} \
      ${inputPath}
    `;

    exec(command, (error) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Compression failed" });
      }

      const pdfBytes = fs.readFileSync(outputPath);

      res.setHeader("Content-Type", "application/pdf");
      res.send(pdfBytes);

      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "PDF compression error" });
  }
});


export default router;