import './App.css'
import {BrowserRouter, Routes,Route}from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './component/HomePage'
import ListContext from './Context/Context'
import { useState } from 'react'

function App() {
  const [filmList, setFilmList] = useState([]);

  return (
    <>
    <ListContext.Provider value={{ filmList, setFilmList }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </ListContext.Provider>
    </>
  )
}

export default App
