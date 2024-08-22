'use client'
import React from 'react'

export default function Results({results}) {
  return (
    <div>
      {
        results.map((el)=>(
            <p>{el.title}</p>
        ))
      }
    </div>
  )
}
