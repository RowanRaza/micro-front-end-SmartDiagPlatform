import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import './Header.css'

export default ({onHamburgerClick=()=>{}, onProfileClick=()=>{}}) => {
    return (
        <div className="header-container">
            <TiThMenu onClick={onHamburgerClick} size={30}/>
            <FaUserCircle onClick={onProfileClick} size={30}/>
        </div>
    )
}