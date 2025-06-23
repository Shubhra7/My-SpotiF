import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'


const Display = () => {
    const displayref = useRef();
    const loc = useLocation();  // for taking the current url and related data
    const isAlbum = loc.pathname.includes("album");
    const albumID = isAlbum?loc.pathname.slice(-1):"" // for taking the album id
    const bgclr = albumsData[Number(albumID)].bgColor;
    console.log(bgclr);

    useEffect(()=>{
        if(isAlbum){
            displayref.current.style.background= `linear-gradient(${bgclr},#121212)`;
        }else{
            displayref.current.style.background= "#121212";
        }
    })
    
    
  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
            <Route path='/' element={<DisplayHome/>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
        </Routes>
    </div>
  )
}

export default Display
