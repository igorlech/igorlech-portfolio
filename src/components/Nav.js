import { NavLink } from "react-router-dom";
//import logo from "./logo.png";
import logo from "../img/logomain.png";

export default function Nav() {
    return (
        <header className="nav" id="navback">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    <NavLink to="/" end>
                        <img src={logo} className="nav-logo" alt="Navbar Logo" />
                    </NavLink>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="nav-links">
                <NavLink to="/about">My journey</NavLink>
                <NavLink to="/contact">Let's talk!</NavLink>
            </div>
        </header>
    )
}