// import React from 'react';
// import './Categorie.css';
// import mangaLogo from '../../assets/a.jpeg';
// import { Link } from 'react-router-dom';


// function Catégorie(props) {
  
//   return (
    
//       <div className="categorie">
//         <h1>{props.title}</h1>
//         {props.list.map((item, index) => (
//           <Link to={`/Detail/`+item.titleNo+"/"+props.TypeListe} key={index}>
//             <div className="manga-block">
//               <img src={mangaLogo} className="logoManga" alt="LogoManga" />
//               <h2 className='titre'>{item.title}</h2>
//               <p className='type'>{item.representGenre}</p>
//               <p className='chapitre'>{item.totalServiceEpisodeCount} Chapitres</p>      
//             </div>
//           </Link>
//         ))}
//       </div>
//   );
// }

// export default Catégorie;


import React from 'react';
import './Categorie.css';
import mangaLogo from '../../assets/a.jpeg';
import { Link } from 'react-router-dom';

function Catégorie(props) {
  return (
    <div className="categorie">
      <h1>{props.title}</h1>
      {props.list.map((item, index) => (
        console.log(item),
        <Link to={`/Detail/${item.mal_id}`} key={index}>
          <div className="manga-block">
            <img src={item.images.jpg.image_url} className="logoManga" alt="LogoManga" />
            <h2 className='titre'>{item.title}</h2>
            <p className='type'>{item.type}</p>
            <p className='chapitre'>{item.chapters} Chapitres</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Catégorie;
