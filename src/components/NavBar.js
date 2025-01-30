import { NavLink, navLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            /* add styling to the NavLink */
            className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
            to="/about"
            className="nav-link"
            >
                Login
            </NavLink>
        </nav>
    );
};

export default NavBar;