import { useState } from "react";
import convertText from "./text";
import convertHtml from "./html";

function TxtHtml({ title }) {
  const [value, setValue] = useState("");

  const handleConvert = async () => {
    if (!value.trim()) {
      alert(`${title} input required`);
      return;
    }

    if (title === "TEXT") await convertText(value);
    if (title === "HTML") await convertHtml(value);

    // ✅ clear textarea after download
    setValue("");
  };

  return (
    <div className="card text-html" id={`${title.toLowerCase()}-to-pdf`}>
      <h4 className="card-title">{title} to PDF</h4>

      <textarea
        className="textarea-input"
        rows="4"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="convert-btn" onClick={handleConvert}>
        Convert {title}
      </button>
    </div>
  );
}

export default TxtHtml;
