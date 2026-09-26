import { useState } from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import GeneratedEmail from "./components/GeneratedEmail";
import Navbar from "./components/Navbar";

function App() {
  const [generatedMailData, setGeneratedMailData] = useState(null);

  const handleData = (genMail) => {
    setGeneratedMailData(genMail);
  };

  return (
    <div>
      <Navbar />
      <div className="mb-5">
        <EmailForm sendData={handleData} />
      </div>
      <div className="mb-5">
        {generatedMailData !== null ? (
          <GeneratedEmail generatedMailData={generatedMailData} />
        ) : (
          <div className="text-center">
            <p>No email generated yet.</p>
            <p>Fill in the form above and click Generate Email.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
