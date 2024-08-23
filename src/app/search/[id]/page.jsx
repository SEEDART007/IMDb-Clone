import Results from "@/app/components/Results";


export default async function SearchPage({ params }) {
  const seachTerm = params.id;
  const API_KEY='c02a1d1fbe3e3dbe2c1f1fe78268bc3d';

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
