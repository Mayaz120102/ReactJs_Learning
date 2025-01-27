import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Flagmanuing" About="About Me" />
      <div className="container">
        {" "}
        <TextForm heading="enter the text to convert" />
      </div>
    </>
  );
}

export default App;
