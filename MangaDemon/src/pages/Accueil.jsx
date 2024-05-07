
import React, { useState, useEffect } from 'react';
import Categorie from '../components/Categorie/Categorie';
import donnees from './../../manga.json'

function Accueil() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/manga', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setResult(data.data);
        setLoading(true);
        console.log(data.data)
      }
      )
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <Categorie list={result.slice(0,5)} title="News" />
        <Categorie list={result.slice(5,10)} title="Best" />
        <Categorie list={result.slice(10,15)} title="Most liked" />
      </div>
    </main>
  );
}

export default Accueil;
