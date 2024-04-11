/* fichier Navigation.jsx */
import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg'

export default function Navigation() {
  return (
    <header>
      <nav className="crumbs">
        <ol>
          <li>
            <Link to={`/`}>
            <a href="https://vitejs.dev" target="_blank">
             <img src={viteLogo} className="logo" alt="LogoManga" />
             </a></Link>
          </li>
          <li>
            <Link to={`ForYou`}>For You</Link>
          </li>
          <li>
            <Link to={`Suggestions`}>Suggestions</Link>
          </li>
          <li>
            <Link to={`Historical`}>Historical</Link>
          </li>
          <li>
            <Link to={`Search`}>Search</Link>
          </li>
          <li>
            <Link to={`Settings`}>Settings</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
            