import express from "express";
import puppeteer from "puppeteer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { html } = req.body;
    if (!html) return res.status(400).json({ error: "HTML required" });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({ format: "A4" });
    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  } catch {
    res.status(500).json({ error: "HTML to PDF failed" });
  }
});

export default router;
