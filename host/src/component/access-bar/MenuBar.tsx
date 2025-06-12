import { useEffect, useState } from "react";
import './MenuBar.css';
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "auth/AuthContext";

export default ({ isVisible = false }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [sections, setSections] = useState([
    "Dashboard",
    "Notifications",
    "Materiels",
  ]);
  const [icons, setIcons] = useState([
    <BiSolidDashboard />,
    <IoNotifications />,
    <FaToolbox />,
  ]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Gère l'ajout dynamique de "Utilisateurs" pour les admins
  useEffect(() => {
    if (user?.role === 'admin') {
      setSections((prev) => [...prev, "Utilisateurs"]);
      setIcons((prev) => [...prev, <FaUserFriends />]);
    }
  }, [user]);

  // Synchronise activeSection avec l'URL, en mettant en PascalCase
  useEffect(() => {
    const raw = location.pathname.replace("/app/", ""); // ex: "dashboard" ou "mon_compte"
    if (!raw) {
      setActiveSection("Dashboard");
      return;
    }
    // Met la première lettre en majuscule et garde le reste
    const formatted =
      raw
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("_");
    setActiveSection(formatted);
  }, [location.pathname]);

  const handleSectionClick = (section: string) => {
    // On transforme en minuscule + underscore pour l'URL
    const path = section.toLowerCase();
    navigate(`/app/${path}`);
    setActiveSection(section);
  };

  return (
    <div className={`mb-container ${isVisible ? "" : "hidden"}`}>
      <h1 id="logo">
        <p>
          I-d<span>ia</span>g
        </p>
      </h1>
      <ul>
        {sections.map((item, index) => (
          <li
            key={item}
            className={`section ${activeSection === item ? "active" : ""}`}
            onClick={() => handleSectionClick(item)}
          >
            {icons[index]} <span className="bar-text">{item}</span>
          </li>
        ))}
        <li
          className={`section ${
            activeSection === "Mon_compte" ? "active" : ""
          } account`}
          onClick={() => handleSectionClick("Mon_compte")}
        >
          <FaUser />
          <span className="bar-text">Mon compte</span>
        </li>
      </ul>
    </div>
  );
};
