# PDF Converter Tool

A full-stack PDF Converter application built with React (Vite) and Node.js (Express).  
It supports converting, merging, and processing PDFs using a simple web interface.

---

## Features

- Multiple Images → One PDF
- Multiple PDFs → One PDF (Merge)
- Excel → PDF
- Compress PDF
- Text → PDF
- HTML → PDF
- Convert button based workflow
- Auto clear input after conversion

---

## Project Structure

client/
├── public/
├── src/
│ ├── component/
│ │ ├── Converter.css
│ │ ├── Converter.jsx
│ │ ├── download.jsx
│ │ ├── filebased.jsx
│ │ ├── formImgPdf.jsx
│ │ ├── html.jsx
│ │ ├── multipailmgPdf.jsx
│ │ ├── SingleInput.jsx
│ │ ├── text.jsx
│ │ └── TxtHtmlForm.jsx
│ ├── App.jsx
│ ├── main.jsx
├── index.html
├── package.json
└── vite.config.js
server/
├── routes/
│ ├── compressPdf.js
│ ├── excelToPdf.js
│ ├── htmlToPdf.js
│ ├── imgsToPdf.js
│ ├── mergePdf.js
│ └── textToPdf.js
├── uploads/
├── db.js
├── server.js
└── package.json


---

## Technologies Used

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Multer
- pdf-lib
- CORS

---

## Setup Instructions

### Backend

```bash
cd server
npm install
mkdir uploads
node server.js
Backend runs on:
http://localhost:3000
Frontend
cd client
npm install
npm run dev
Frontend runs on:
http://localhost:5173
API Routes
/multi-image-to-pdf
/merge-pdf
/excel-to-pdf
/text-to-pdf
/html-to-pdf
/compress-pdf
File Upload Note
Multiple files must be sent using the key files
Backend uses upload.array("files")
Example Test (Images to PDF)
curl -X POST http://localhost:3000/multi-image-to-pdf \
  -F "files=@img1.jpg" \
  -F "files=@img2.png" \
  --output output.pdf
Developer
Developed by Meet

---

If you want a **shorter** or **GitHub-optimized** version, tell me 👍
