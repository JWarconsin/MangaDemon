import '../App.css'
import React, { useState, useEffect } from 'react';
import Categorie from '../components/Categorie/Categorie';
import donnees from './../../manga.json'



function Search() {
  const [result, setResult] = useState([]);
  const [infoManga, setinfoManga] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?sfw=true&q=${infoManga}`);
      const data = await response.json();
      setResult(data.data);
    } catch (error) {
      console.error('Erreur lors de la recherche :',error)
    }
  };

  return (
    <>
    <main>
     
      <div className="container">
        <nav id='navBar'>
          <input className="SearchBar"
           type="text"
           id="titre"
           placeholder='Title'
           value={infoManga}
           onChange={(e) => setinfoManga(e.target.value)}
           />
          <button onClick={handleSearch} className='SearchButton' >Rechercher</button>
        </nav>

        <div className="containerAll">
          <Categorie list={result.slice(0,2)} title="" />
          <Categorie list={result.slice(2,4)} title="" />
          <Categorie list={result.slice(4,6)} title="" />
        </div>
      </div>
    </main>
    </>
  )
}

export default Search
