import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./page/Login";

const App = () => (
  <Login/>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);