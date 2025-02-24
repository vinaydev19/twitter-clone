import "./App.css";
import Body from "./components/Body";
import Home from "./components/Home";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Body />
        <Toaster />
      </div>
    </>
  );
}

export default App;
