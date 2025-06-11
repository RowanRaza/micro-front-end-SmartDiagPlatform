import ReactDOM from "react-dom/client";

import { useState } from "react";
import {AuthProvider} from "auth/AuthContext";
import "./index.css";
import MenuBar from "./component/access-bar/MenuBar";
import Header from "./component/access-bar/Header";
import AppRoute from "./route/AppRoute";

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <AuthProvider>
            <>
                <AppRoute/>
            </>
        </AuthProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);