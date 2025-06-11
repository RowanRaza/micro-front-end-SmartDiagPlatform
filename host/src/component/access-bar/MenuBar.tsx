import { useEffect, useState } from "react";
import './MenuBar.css'
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default ({ isVisible = false }) => {
    const [activeSection, setActiveSection] = useState<string|null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionClick = (section :string) => {
        setActiveSection(section);
        navigate(`/app/${section}`);
    };

    useEffect(() => {
        setActiveSection(location.pathname.replace("/app/", ""))
    }, [location])

    const icons = [<BiSolidDashboard/>, <IoNotifications/>, <FaUserFriends/>, <FaToolbox/>]

    return (
        <>
            <div className={`mb-container ${isVisible ? '' : 'hidden'}`}>
                <h1 id="logo">
                    <p>
                        I-d<span>ia</span>g
                    </p>
                </h1>
                <ul>
                    {['Dashboard', 'Notifications', 'Utilisateurs', 'Materiels'].map((item, index) => (
                        <li 
                            key={item}
                            className={`section ${activeSection === item ? 'active' : ''}`}
                            onClick={() => handleSectionClick(item)}
                        >
                            {icons[index]} <span className="bar-text">{item}</span>
                        </li>
                    ))}
                    <li 
                        className={`section ${activeSection === 'Mon_compte' ? 'active' : ''} account`}
                        onClick={() => handleSectionClick('Mon_compte')}
                    >
                        <FaUser/>
                        <span className="bar-text">Mon compte</span>
                    </li>
                </ul>
            </div>
        </>
    )
}