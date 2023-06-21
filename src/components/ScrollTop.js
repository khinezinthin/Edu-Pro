import React, {useLayoutEffect} from 'react'
import {useLocation} from "react-router-dom"

const ScrollTop = () => {
    const {pathname} = useLocation();
    useLayoutEffect(()=>{
        window.scrollTo({top: 0, behavior: "auto"})
    },[pathname])
  return null;
}

export default ScrollTop