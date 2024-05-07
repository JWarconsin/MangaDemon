/* fichier App.jsx */
import { Outlet } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
        