import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout" 
import Legion from "../assets/Legion.svg";

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Legion} alt="Legion AJJ" />
          <span>Journal AJJ</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}
