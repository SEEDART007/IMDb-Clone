'use client'
import  { useEffect } from 'react'

export default function Error({error , reset}) {
    useEffect(()=>{
console.log(error)
    },[error])
  return (
    <div>
      <h1>something went wrong</h1>
      <button  onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
