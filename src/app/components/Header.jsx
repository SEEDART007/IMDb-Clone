import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import ToggleMode from './ToggleMode'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    <div className='flex gap-5'>
     <MenuItem title="home" address="/" Icon={AiFillHome}/>
     <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
    </div>
    <div className='flex items-center gap-4'>
    <ToggleMode/>
    <Link href={"/"} className='flex gap-1 items-center'>
        <span className=' text-3xl font-bold hidden sm:inline'>My</span>
        <span className='text-2xl font-bold bg-amber-500 rounded-md text-black shadow-sm p-2'>IMDb</span>
    </Link>
    </div>
    </div>
  )
}
