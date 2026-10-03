"use client"
import { useEffect, useState } from "react"

export default function ScrollProgress(){
  const [width,setWidth] = useState(0)
  useEffect(()=>{
    const onScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setWidth(scrolled)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return <div style={{position:"fixed", top:0, left:0, height:"3px", width:`${width}%`, background:"linear-gradient(90deg, #143856, #5AC8D0)", zIndex:9999, transition:"width 0.1s linear"}} />
}