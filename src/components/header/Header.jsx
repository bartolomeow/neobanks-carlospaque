import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";
import logopart1 from "../../assets/NEO.png";
import "./header.css";

const Header = () => {
    return (
        <>
            <header>
                <div className="logo-neobanks">
                    <Link to="#">
                        <img src={logopart1} alt="Neobanks logo" />
                        <span className="BANKS-logo">BANKS</span>
                    </Link>
                </div>
                <Link to="#">
                    <div className="config-icon">
                        <BsGear size={25} color="black" />
                    </div>
                </Link>
            </header>
        </>
    );
};

export default Header;
