import React,{useState} from 'react'
import {MdOutlineKeyboardArrowUp} from "react-icons/md"
import './BackToTop.css'

const BackToTop = () => {
    const [scrollTop,setScrollTop] = useState(0)
    const [scrollValue,setScrollValue] = useState(0)
    let calcScrollValue = ()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // console.log(scrollHeight);
        let scrollValue = Math.round((scrollTop * 100) / scrollHeight);
        // console.log(scrollValue);
        setScrollTop(scrollTop)
        setScrollValue(scrollValue)
    }
    const scrollHandler = ()=>{
        document.documentElement.scrollTop = 0
    }
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    const progressStyle = {
        background: `conic-gradient(rgb(128, 42, 128) ${scrollValue}%, rgb(207, 84, 207) ${scrollValue}%)`,
      };
    
  return (
    <div>
        <div className={`progress ${scrollTop > 100 ? "grid" : "hidden"} `} style={progressStyle}>
            <span className=' progress-value ' onClick={scrollHandler}>
                <MdOutlineKeyboardArrowUp/>
            </span>
        </div>
    </div>
  )
}

export default BackToTop