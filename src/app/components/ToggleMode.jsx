'use client'
import React, { useEffect, useState } from 'react'
import {MdLightMode,MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
export default function ToggleMode() {
    const {theme,setTheme,systemTheme}=useTheme()
    const[mounted,setMounted]=useState(false)
    useEffect(()=>{
      setMounted(true)
    },[]);
    const currentTheme=theme==='system'?systemTheme:theme
    
  return (
    <div>
      {mounted &&
    currentTheme=='dark'?<MdDarkMode onClick={()=>setTheme('light')} className='text-2xl hover:text-amber-500 cursor-pointer'/>:<MdLightMode  onClick={()=>setTheme('dark')} className='text-2xl hover:text-amber-500 cursor-pointer'/>}
    </div>
  )
}
