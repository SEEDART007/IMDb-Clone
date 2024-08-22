'use client'
import React, { useEffect } from 'react'

export default function error({error , reset}) {
    useEffect(()=>{
console.log(error)
    },[error])
  return (
    <div>
      <h1>something went wrong</h1>
      <button className='' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
