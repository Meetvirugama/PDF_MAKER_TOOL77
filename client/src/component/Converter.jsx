  import MultiImgPdf from "./formImgPdf";
  import SingleInput from "./SingleInput";
  import TxtHtml from "./TxtHtmlForm";
  import "./Converter.css";

  function Converter() {
    return (
      <div className="container" id="pdf-converter">
        <h1 className="main-title">PDF Converter</h1>

        <MultiImgPdf
          name="Multiple Images → One PDF"
          type="file"
          accept=".jpg,.jpeg,.png"
          route="multi-image-to-pdf"
        />

        <MultiImgPdf
          name="Multiple PDF → One PDF"
          type="file"
          accept=".pdf"
          route="merge-pdf"
        />

        <SingleInput
          title="Excel to PDF"
          accept=".xls,.xlsx"
          route="excel-to-pdf"
          filename="excel.pdf"
        />

        <SingleInput
          title="Compress PDF"
          accept=".pdf"
          route="compress-pdf"
          filename="compress.pdf"
        />

        <TxtHtml title="TEXT" />
        <TxtHtml title="HTML" />

        <div className="footer">
          Developed by <span>Meet</span>
        </div>
      </div>
    );
  }

  export default Converter;
