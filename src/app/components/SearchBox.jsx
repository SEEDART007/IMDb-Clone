'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


export default function SearchBox() {
    const navigation = useRouter()
    const[search,setSearch]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigation.push(`/search/${search}`)
    }
  return (
   <form onSubmit={handleSubmit} className='flex justify-center p-5 max-w-6xl mx-auto'>
    <input type='text' placeholder='Search Something...' className='w-full h-10 outline-none border-b  placeholder-gray-500 rounded-md bg-transparent p-4 ' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button type='submit' className='text-black font-bold disabled:text-white disabled:bg-gray-500 bg-green-400 rounded-md p-2' disabled={!search}>Search</button>
   </form>
  )
}
