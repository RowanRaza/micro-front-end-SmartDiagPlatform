import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import './Header.css'
import { useNavigate } from "react-router-dom";

export default ({onHamburgerClick=()=>{}, onProfileClick=()=>{}}) => {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <TiThMenu className="hamburg-menu" onClick={onHamburgerClick} size={30}/>
            <BiSolidHome className="home-icon" onClick={() => navigate('Dashboard')} size={30}/>
            <FaUserCircle onClick={onProfileClick} size={30}/>
        </div>
    )
}