import React, { useContext } from 'react';
import ListContext from '../Context/Context';
import ReactCountryFlag from 'react-country-flag';

function HomePage() {
    const { filmList } = useContext(ListContext);

//  ho definito una costante che associa che associa ogni codice lingua al codice ISO del paese corrispondente
    const languageToCountryCode = {
        en: 'US',
        it: 'IT',
        fr: 'FR',
        es: 'ES',
        de: 'DE',
        ja: 'JP',
        ko: 'KR',
        zh: 'CN',
    };
//  genero una funzione per il controllo delle stelle
    const renderStars = (vote) => {
// utilizzo math.ceil divido il voto per 2
  const stellePiene = Math.ceil(vote / 2);
  //  calcolo le stelle piene 
  const stelleVuote = 5 - stellePiene;
  const stelle = [];
//  utilizzo il ciclo for che generano dinamicamente i tag i 
  for (let i = 0; i < stellePiene; i++) {
    stelle.push(<i key={`piena-${i}`} className="fas fa-star text-warning"></i>);
  }
  for (let i = 0; i < stelleVuote; i++) {
    stelle.push(<i key={`vuota-${i}`} className="far fa-star text-warning"></i>);
  }

  return <>{stelle}</>;
};


  return (
    <>
  
      <h1 className='text-center text-danger mb-4'>FILM & SERIES</h1>
    <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {filmList && filmList.length > 0 ? (
          filmList.map((film) => (
            <div
              key={film.id}
              className="netflix-card position-relative text-white"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w342${film.poster_path})`,
              }}
            >
              <div className="overlay-info p-3">
                <h5>{film.title || film.name}</h5>
                <p>Titolo originale: {film.original_title || film.original_name}</p>
                <p>
                  Lingua:&nbsp;
                  <ReactCountryFlag
                    countryCode={languageToCountryCode[film.original_language]}
                    svg
                    style={{ width: '5px', height: '5px' }}
                  />
                </p>
                <p>Voto: {renderStars(film.vote_average)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Nessun film trovato.</p>
          
        )}
      </div>
    </div>
     </>
  );
}


export default HomePage;
