📄 PDF Converter Tool (MERN)
A full-stack PDF Converter Web Application built using React (Vite) on the frontend and Node.js + Express on the backend.
It allows users to convert and generate PDFs easily from multiple formats.
🚀 Features
✅ File Conversions
Multiple Images → One PDF
Multiple PDFs → One PDF
Excel → PDF
Text → PDF
HTML → PDF
✅ PDF Operations
Compress PDF
🛠 Tech Stack
Frontend
React (Vite)
Axios
JavaScript
Backend
Node.js
Express.js
pdf-lib
Puppeteer
Multer
📂 Project Structure
Converter Tool/
│
├── client/
│   ├── src/
│   │   ├── component/
│   │   │   ├── Converter.jsx
│   │   │   ├── TxtHtmlForm.jsx
│   │   │   ├── SingleInput.jsx
│   │   │   ├── MultiImgPdf.jsx
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── text.js
│   │   │   ├── html.js
│   │   │   ├── download.js
│   │   │   └── filebased.js
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   │   ├── textToPdf.js
│   │   ├── htmlToPdf.js
│   │   ├── excelToPdf.js
│   │   ├── compressPdf.js
│   │   ├── multiImageToPdf.js
│   │   └── mergePdf.js
│   ├── server.js
│   └── package.json
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/pdf-converter-tool.git
cd pdf-converter-tool
2️⃣ Backend Setup
cd server
npm install
npm run dev
Server runs on:
http://localhost:3000
3️⃣ Frontend Setup
cd client
npm install
npm run dev
Frontend runs on:
http://localhost:5173
🔗 API Endpoints
Feature	Endpoint	Method
Text → PDF	/text-to-pdf	POST
HTML → PDF	/html-to-pdf	POST
Excel → PDF	/excel-to-pdf	POST
Compress PDF	/compress-pdf	POST
Multi Images → PDF	/multi-image-to-pdf	POST
Merge PDFs	/merge-pdf	POST
🧪 How to Test
Start the backend server
Start the frontend
Upload files or enter text / HTML
Click convert
PDF will download automatically
⚠️ Important Notes
❌ No PDF splitting
❌ No password protection
✅ No Ghostscript required
✅ No system-level dependencies
✅ Works on Windows, macOS, and Linux
📌 Known Limitations
PDF compression is basic (JavaScript-based)
Large PDFs may take more time to process
📜 License
This project is created for learning and academic purposes.
👨‍💻 Author
Meet Virugama
DA-IICT Student
MERN Stack Developer
If you want next:
📸 Add screenshots
🧾 Resume-ready project description
🎨 UI improvements
☁️ Deploy on Render / Vercel
