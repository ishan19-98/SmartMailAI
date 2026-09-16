import "./App.css";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import GeneratedEmail from "./components/GeneratedEmail";
import Navbar from "./components/Navbar";

function App() {

  const email={
    "sender": "ishan",
    "receiver": "raj",
    "subject": "Hello",
    "body": "Hello, How are you?"
  }

  return (
    <div>
      <Navbar />
      <div className="mb-5">
        <EmailForm />
      </div>
      <div className="mb-5">
        <GeneratedEmail email={email}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
