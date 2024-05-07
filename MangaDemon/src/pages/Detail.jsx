
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import donnees from './../../manga.json';
// import { useState } from 'react';
// import { useEffect } from 'react';
// function Detail() {

//   const [result, setResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   let params = useParams()
//   const mangaId = params.idManga
//     const [manga, setManga] = useState({});
//     console.log(manga);
//   useEffect(() => {
//     fetch('https://api.jikan.moe/v4/manga/'+mangaId, {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(data => {
//         setManga(data.data);
//         setLoading(true);
//       }
//       )
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   console.log(manga);
//   return (
//     <div className="manga-container">
//       <div id="manga-details">
        
//         <img id="ImgManga" src={manga.images.jpg.image_url} alt={`Image de ${manga.title}`} />
//         <div className="details">
//             <h1>{manga.title}</h1>
//             <p><strong>Lien MAL:</strong> <a href={manga.url}>{manga.title}</a></p>
//             <p>{manga.content}</p>
//             <p><strong>Posté par:</strong> <a href={manga.user.url}>{manga.user.username}</a></p>
//             <p><strong>Date:</strong> {new Date(manga.date).toLocaleDateString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [manga, setManga] = useState({});
  const [loading, setLoading] = useState(false);
  const { idManga } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/manga/${idManga}`)
      .then(response => response.json())
      .then(data => {
        setManga(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [idManga]);

  return (
    <div className="manga-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="manga-details">
          {manga.images && manga.images.jpg && (
            <img id="ImgManga" src={manga.images.jpg.image_url} alt={`Image de ${manga.title}`} />
          )}
          <div className="details">
            <h1>{manga.title}</h1>
            <p><strong>Lien MAL:</strong> <a href={manga.url}>{manga.title}</a></p>
            <p>{manga.synopsis}</p>
            {/* Ajoutez plus de propriétés de manga ici selon vos besoins */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
  