import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<Create />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
