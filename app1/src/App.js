import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Flagmanuing" About="About Me" />
      <div className="container">
        {" "}
        {/* <TextForm heading="enter the text to convert" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
