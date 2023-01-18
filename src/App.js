import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
