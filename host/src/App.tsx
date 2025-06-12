import ReactDOM from "react-dom/client";

import { AuthProvider } from "auth/AuthContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
