  import express from "express";
  import multer from "multer";
  import { PDFDocument } from "pdf-lib";
  import XLSX from "xlsx";


  const router = express.Router();
  const upload = multer({ dest: "uploads/" });

  router.post("/", upload.single("file"), async (req, res) => {
    try {

        const workbook = XLSX.readFile(req.file.path);
        const sheet = workbook.sheet[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);

      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      let y = page.getHeight() - 40;

      data.forEach( (row) => {
        page.drawText(JSON.stringify(row) , {
            x : 20,
            y,
            size : 10,
        });
        y -=15;
      });

      const pdfBytes = await pdfDoc.save();
      res.contentType("application/pdf");
      res.send(pdfBytes);
    } catch (err) {
      res.status(500).json({ error: "PDF conversion failed" });
    }
  });

  export default router;
