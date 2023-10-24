import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={faEarthAmerica} className="navbar--icon"/>
            <h1 className="navbar--title">my travel journal</h1>
        </nav>
    );
}

export default Navbar;