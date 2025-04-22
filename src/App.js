import React from "react";
import {useState,  useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=633e1d63"
const movie1 = {
    "Title": "Ivan Ironman Stewart's Super Off Road",
    "Year": "1989",
    "imdbID": "tt0162408",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDMwMWUyNDAtZmM3Ny00ZGM2LTg5MTItYmZiNzM1NzAyNGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
}
const App = () => {
    const [Movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Marvel');
    }, [])

    return (
       <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input placeholder="search for movies" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
            <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>
        {
            Movies?.length > 0 ?
            (
                <div className="container">
        
                    {Movies.map((movie) => 
                (<MovieCard movie={movie}/>))}

                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )
        }

        

       </div>
    );
}
// 633e1d63

export default App;