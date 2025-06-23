import React, { useEffect, useState } from 'react'
import Home from './components/Home.jsx'
import Opening from './components/Opening.jsx'

const App = () => {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setSplashVisible(false);
    },4000)

    return ()=> clearTimeout(timer);
  },[])

  return (
    <>
    {isSplashVisible &&  <Opening/>}
    <Home />
    </>
  )
}

export default App
