'use client'
import Error from 'next/error';
import Results from './components/Results';


async function page({searchParams}) {
const genre=searchParams.genre || 'fetchTrending'
  const API_KEY='c02a1d1fbe3e3dbe2c1f1fe78268bc3d';
 
    const res = await fetch(`https://api.themoviedb.org/3${genre==='fetchTopRated'?'/movie/top_rated':'/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`)
  
 
  const data = await res.json()
  if(!res.ok){
    throw new Error("failed to fetch")
  }
  const result = data.results
  console.log(result)
  return (
    <div>
      <Results results={result}/>
    </div>
  )
}

export default page    
