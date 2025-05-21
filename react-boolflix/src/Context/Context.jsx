import React, { createContext } from 'react'

const ListContext = createContext({
  filmList: [],
  setFilmList: () => {},
});

export default ListContext
