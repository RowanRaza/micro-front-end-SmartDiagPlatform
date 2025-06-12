import ReactDOM from "react-dom/client";

import "./index.css";
import Users from "./page/Users";

const App = () => (
  <Users/>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);