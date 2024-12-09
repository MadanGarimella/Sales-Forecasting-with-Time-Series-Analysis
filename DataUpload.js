import React from "react";
import Papa from "papaparse";

function DataUpload({ onDataUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const data = result.data.map((row, index) => ({
            month: row["Month"] || `Month ${index + 1}`,
            sales: parseFloat(row["Sales"]) || 0,
          }));
          onDataUpload(data);
        },
      });
    }
  };

  return (
    <div className="data-upload">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <p>Upload a CSV file with columns "Month" and "Sales"</p>
    </div>
  );
}

export default DataUpload;
