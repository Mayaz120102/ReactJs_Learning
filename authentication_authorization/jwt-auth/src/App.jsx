import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Profile />
    </>
  );
}

export default App;
