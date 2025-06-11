import ReactDOM from "react-dom/client";

import "./index.css";
// import Login from 'auth/Login';
import MenuBar from "./menu-bar/MenuBar";
import { useState } from "react";
import Header from "./menu-bar/Header";

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="main-container">
            <MenuBar isVisible={sidebarVisible} />
            
            <div className="content">
                <Header onHamburgerClick={()=>setSidebarVisible(!sidebarVisible)}/>
                <p>DashBoard ohatra</p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);