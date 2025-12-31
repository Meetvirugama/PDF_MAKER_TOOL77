# 📄 PDF Converter Tool

A full-stack PDF Converter web application that allows users to convert, merge, compress, and generate PDFs using a modern React frontend and a Node.js backend.

This project is built for learning and practical implementation of file handling, PDF processing, and full-stack development.

---

## 🚀 Features

### ✅ Available Features
- 📷 **Multiple Images → One PDF**
- 📄 **Multiple PDFs → One PDF**
- 📊 **Excel to PDF**
- 🗜️ **Compress PDF**
- 📝 **Text to PDF**
- 🌐 **HTML to PDF**

> ❌ Split PDF and Protect PDF features have been removed.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- Multer (File Uploads)
- pdf-lib
- Puppeteer (HTML to PDF)

## 👤 Author Details

**Name:** Meet Virugama  
**Role:** Full-Stack Developer (Student)  
**Institution:** DA-IICT  
**Project Type:** Academic / Learning Project  
**Technologies Used:** React, Node.js, Express, PDF Libraries  

This project was designed and developed as a hands-on learning exercise to understand full-stack development, file handling, and PDF processing using modern web technologies.


---

## 📂 Project Structure

```text
Converter Tool/
│
├── client/
│   ├── src/
│   │   ├── component/
│   │   │   ├── Converter.jsx
│   │   │   ├── MultiImgPdf.jsx
│   │   │   ├── SingleInput.jsx
│   │   │   ├── TxtHtmlForm.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   │   ├── multiImageToPdf.js
│   │   ├── mergePdf.js
│   │   ├── excelToPdf.js
│   │   ├── compressPdf.js
│   │   ├── textToPdf.js
│   │   └── htmlToPdf.js
│   ├── server.js
│   └── package.json

▶️ How to Run the Project

1️⃣ Start Backend Server
cd server
npm install
nodemon server.js
Backend will run on:
http://localhost:3000

2️⃣ Start Frontend
cd client
npm install
npm run dev
Frontend will run on:
http://localhost:5173

🔁 API Endpoints
Feature	Endpoint
Multiple Images → PDF	/multi-image-to-pdf
Merge PDFs	/merge-pdf
Excel → PDF	/excel-to-pdf
Compress PDF	/compress-pdf
Text → PDF	/text-to-pdf
HTML → PDF	/html-to-pdf

🎨 Styling
All CSS styling in this project was created with the help of ChatGPT.

⚠️ Notes
Node.js version 18+ is recommended
Puppeteer may download Chromium during installation
PDF compression depends on system tools availability
Large files may take additional processing time

📜 License
This project is created for educational and learning purposes only.

🙌 Acknowledgements
React
Express.js
pdf-lib
Puppeteer
ChatGPT
