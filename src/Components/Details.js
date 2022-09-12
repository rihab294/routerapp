import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function Details({movies}) {
    const {id} = useParams()
    const movie = movies.find((movie)=>(movie.id == id))
    const navigate = useNavigate() 
  return (
    <div>
    <h1>{movie.title}</h1>
    <div>{movie.description}</div>
    <div>{movie.link}</div>
    <Button variant='secondary' onClick={()=>navigate(-1)}>Go back</Button>
    </div>
  )
}
