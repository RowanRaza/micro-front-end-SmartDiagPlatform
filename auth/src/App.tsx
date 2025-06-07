import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./Login/Login";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: auth</div>
    <div>Framework: react-19</div>
    <Login/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);