import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumDatalocal = albumsData[id];
    console.log(albumDatalocal);
    const {playWithId} = useContext(PlayerContext)
    
    
  return (
    <>
     <Navbar/> 
     <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumDatalocal.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                {albumDatalocal.name}
            </h2>
            <h4>{albumDatalocal.desc}</h4>
            <p className='mt-2'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>My-Spotify </b> 35,67,255 likes |
                <b> 50 Songs </b>| about 2hr 35 min
            </p>
        </div>
     </div>
     <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden md:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
     </div>
     <hr />
     {
        songsData.map((item,index)=>(
            <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumDatalocal.name}</p>
                <p className='text-[15px]'>3 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
     }
    </>
  )
}

export default DisplayAlbum
