import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ListContext from '../Context/Context';

function SearchBar() {
    const { setFilmList } = useContext(ListContext);
    const [query, setQuery] = useState('');
    const API_KEY = '249ce895bb67ab370b3198c235659049';

    // nella funzione indico con un if che se è diverso da query allora mi kikka out altrimenti dichiaro una variabile vuota e una seconda variabile dove inserico il contenuto di tv e movie, effettuo un ciclo foreach per ciclare tramite chiamata ajax dentro la quale recupero i parametri validi sia per fil che per seire tv in modo da avere solo una chiamata ajax sia per film che per seire tv 
    const handleSearch = () => {
        if (!query) return;
        let combined = [];
        const typeApi = ["movie","tv"];
        typeApi.forEach((e)=>{
            axios.get(`https://api.themoviedb.org/3/search/${e}`, {
                params: { api_key: API_KEY, query },
            })
            .then((res)=>{
                combined = [...combined, ...res.data.results];
                console.log(combined)
                setFilmList(combined);
            })
        })
    }
// con la funzione searchmovie  effetuo la chiamata ajax per recuperare i film 
    const searchMovie = () => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day", {
            params: { api_key: API_KEY },

        }).then((res) => {
            const movies = res.data.results;
            console.log(res.data.results)
            setFilmList(movies);

        }).catch((error) => {
            console.error('Errore nella ricerca:', error);
        });
    }
// tramite useeffect indico che al caricamento della pagina iniziale deve riportare il contenuto di searchmovie 
    useEffect(() => {
        searchMovie();
    }, [])

    return (
        <nav className="container-fluid navbar navbar-expand-l">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo */}
                <h3 className="text-danger m-0">BOOLFLIX</h3>

                {/* barra di ricerca  */}
                <div className="d-flex align-items-center" style={{ maxWidth: '400px', width: '100%' }}>
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Cerca un film o una serie"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className="btn btn-outline-danger">
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default SearchBar;
