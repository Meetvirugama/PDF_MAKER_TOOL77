import { useRef, useState } from "react";
import uploadFile from "./filebased";

function SingleInput(props) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleConvert = async () => {
    if (!file) {
      alert("Please choose a file");
      return;
    }

    await uploadFile(file, props.route, props.filename);

    // ✅ clear file input
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="card">
      <h4 className="card-title">{props.title}</h4>

      <input
        ref={fileRef}
        className="file-input"
        type="file"
        accept={props.accept}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="convert-btn" onClick={handleConvert}>
        Convert
      </button>
    </div>
  );
}

export default SingleInput;
