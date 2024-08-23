import React from 'react'
import NavbarItem from './NavbarItem'


export default function Navbar() {
   
  return (
    <div className='flex bg-amber-200 dark:bg-gray-600 gap-4  lg:text-lg justify-center p-4'>
     <NavbarItem title="Trending" param="fetchTrending"/>
     <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
