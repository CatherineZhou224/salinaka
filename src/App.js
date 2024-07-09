import Featured from "./Components/Pages/Featured";
import Home from "./Components/Pages/Home";
import Recommended from "./Components/Pages/Recommended";
import Shop from "./Components/Pages/Shop";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./Components/UI Components/Nav";

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
