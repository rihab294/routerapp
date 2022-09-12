import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({movies, search, searchrate}) {
  return (
    <div className='row justify-content-center'>
    {movies.filter(movie=>movie.title.toUpperCase().includes(search.toUpperCase().trim()) && (movie.rate >= searchrate))
    .map((movie)=> 
      <MovieCard 
      movie={movie}
      key={movie.id}
      />
)}
    </div>
  )
}
