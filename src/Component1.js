import React, { useState, useRef } from "react";
import { Paper } from '@material-ui/core'

/*
  This component will fetch from the imdb API a movie entered
*/



function Input({ props }) {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  return (
    <Container>
      <>
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter movie name" />
        <button onClick={() => console.log('click')}>Fetch Movies!</button>
      </>
    </Container>
  )
}

function MovieTable(props) {
  const { movies } = props

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Something else</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => <tr key={movie.name}><td>{movie.name}</td><td>Something else</td></tr>)}
      </tbody>
    </table>
  )
}

const Component1 = props => {
  const [movieList, setMovieList] = useState([])

  // async shit?

  return (
    <>
      <h1>Movie List</h1>
      <Input onChange={
        fetch('http://www.omdbapi.com/?t=inception')
          .then(request => request.json())
          .then(request => console.log(request))
          .catch(err => { throw new Error(err) })
      }/>

      {movieList.length 
        ? <MovieTable movies={movieList} /> 
        : <Container><span>No movies queried</span></Container>
      }
    </>
  )
};

function Container(props) {
  return <Paper style={{ padding: '20px'}}>{props.children}</Paper>
}

export default Component1;
