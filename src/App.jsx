import PolicyInquiry from "./PolicyInquiry";  // Assuming PolicyInquiry is already set up
import Editransaction from "./Editransaction";  // Import the EDI Transaction component

function App() {
  return (
    <div>
      {/* Policy Inquiry Section */}
      <PolicyInquiry />

      {/* EDI Transaction Section */}
      <Editransaction />  {/* This will display the EDI functionality below PolicyInquiry */}
    </div>
  );
}

export default App;
