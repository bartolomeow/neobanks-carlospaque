import { BsFillBarChartFill, BsFillPersonFill } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav>
            <Link to="#">
                <BsFillBarChartFill size={25} color="white" />
            </Link>
            <Link to="#">
                <FaCompass size={25} color="gray" />
            </Link>
            <Link to="#">
                <BsFillPersonFill size={25} color="gray" />
            </Link>
        </nav>
    );
};

export default Navbar;
