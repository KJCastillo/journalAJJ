import "./Navbar.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Legion from "../assets/Legion.svg";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Legion} alt="Legion AJJ" />
          <span>Journal AJJ</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
