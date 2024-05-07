/* fichier Navigation.jsx */
import { Link } from 'react-router-dom';
import MangaLogo from '../../assets/logo.png'
import './Navigation.css'

export default function Navigation() {
  return (
    <header className='Header'>
      <nav className="crumbs">
        <ol>
          <li>
            <Link to={`/`}>
             <img src={MangaLogo} className="logo" alt="LogoManga" />
             </Link>
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
            