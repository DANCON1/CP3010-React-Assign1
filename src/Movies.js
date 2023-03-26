import {useState, useEffect} from 'react';


function Movies(props) {
    let [movies, setMovies] = useState(null);

    useEffect(()=>{
      // load data from json
      fetch("./movieList.json")
      .then(res=>res.json())
      .then(setMovies)
      .catch(e=>console.log(e.message))
    },[])
  
    try {
      console.log(movies)
      console.log("hello")
    } catch (error) {
      console.log(error)
    }
  
    if(movies==null){
      return <h1>Loading...</h1>
    }

    return (
        <div>
        <h1>Movies!</h1>
        <table bordered="true">
        <tbody>
          <tr>
            <th>Movies</th>
            <th>Release Date</th>
            <th>Actors</th>
            <th>Poster</th>
            <th>Rating</th>
            <th></th>
          </tr>
          {movies.map((m, i) => (
            <tr key={i}>
              <td key="1">{m.name}</td>
              <td key="2">{m.releaseDate}</td>
              <td key="3">{m.actors}</td>
              <td key="4">
                <img src={m.posterImage} width="100px" alt={m.title} />
              </td>
              <td key="5">{m.rating}/5</td>
              <td key="6"></td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
  );
}

export default Movies;
