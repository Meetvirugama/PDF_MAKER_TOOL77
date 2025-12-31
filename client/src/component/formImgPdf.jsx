import { useRef, useState } from "react";
import uploadMultipleImages from "./multipaiImgPdf";

function MultiImgPdf(props) {
  const fileRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleConvert = async () => {
    if (!files.length) {
      alert("Please select files first");
      return;
    }

    await uploadMultipleImages(files, props.route);

    // clear after convert
    setFiles([]);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="card">
      <h4 className="card-title">{props.name}</h4>

      <input
        ref={fileRef}
        className="file-input"
        type="file"
        accept={props.accept}
        multiple
        onChange={(e) => setFiles([...e.target.files])}
      />

      <button className="convert-btn" onClick={handleConvert}>
        Convert
      </button>
    </div>
  );
}

export default MultiImgPdf;
