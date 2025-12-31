import express from "express";
import { PDFDocument, StandardFonts } from "pdf-lib";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text required" });

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(text, {
      x: 50,
      y: 780,
      size: 12,
      font,
      maxWidth: 500,
      lineHeight: 16,
    });

    const pdfBytes = await pdfDoc.save();
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBytes);
  } catch (e) {
    res.status(500).json({ error: "Text to PDF failed" });
  }
});

export default router;
