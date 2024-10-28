import "./navbar.css"
import { faHome, faHouse,faHouseChimney,faduotone, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">
        <FontAwesomeIcon icon={faHouseChimney} className="logoIcon" />
        <span>Rent4U</span></span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar