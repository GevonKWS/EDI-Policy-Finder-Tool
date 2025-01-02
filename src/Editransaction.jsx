import { useState } from "react";

const EdiTransaction = () => {
  const [ediData, setEdiData] = useState("");

  // Function to generate the EDI data
  const generateEdi = () => {
    const ediMessage = `
      ISA*00*          *00*          *ZZ*AGENT123      *ZZ*INSURANCECO   *20231212*1030*U*00401*000000001*0*T*>~
      GS*HC*AGENT123*INSURANCECO*20231212*1030*1*X*004010X091A1~
      ST*834*000000001*004010X091A1~
      BHT*0016*00*12345*20231212*1030*00~
      NM1*P5*1*JONES*JOHN****MI*123456789~
      INS*Y*18*030*02*30*A*Y*Y*Y*Y~
      SE*9*000000001~
      GE*1*1~
      IEA*1*000000001~
    `;
    setEdiData(ediMessage);
  };

  // Function to download the EDI message as a file
  const downloadEdiFile = () => {
    const blob = new Blob([ediData], { type: "text/plain" });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'policy_edi_message.txt';  // File name to be downloaded
    link.click();
  };

  return (
    <div>
      <h2>Previous Policy Transaction (ANSI X12, 834) </h2>
      <button onClick={generateEdi}>Generate Previous EDI Transaction</button>

      {ediData && (
        <div style={{ marginTop: '20px' }}>
          <h3>EDI Data:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'monospace' }}>
            {ediData}
          </pre>
          {/* Button to download the EDI data */}
          <button onClick={downloadEdiFile} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Download Invoice
          </button>
        </div>
      )}
    </div>
  );
};

export default EdiTransaction;
