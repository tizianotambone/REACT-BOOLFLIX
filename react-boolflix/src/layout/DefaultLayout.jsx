import React from 'react'
import { Outlet } from 'react-router-dom';
import SearchBar from '../component/SearchBar';

function DefaultLayout() {
  return (
    <>
        <header>
            <SearchBar/>
        </header>

        <main className='main'>
            <Outlet/>
        </main>
    </>
  )
}

export default DefaultLayout
