import React from "react";
import MovieList from "./MovieList";
import Searchbar from "./SearchBar";
import axios from "axios";
require('dotenv').config()



class App extends React.Component {
  state = {
    
movies:[],



searchQuery:""

  };

async componentDidMount(){
const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
this.setState({movies:response.data.results})
}


  deleteMovie = (movie)=>{
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
      m=>m.id !== movie.id
    )
    this.setState({
      movies: newMovieList


    })
  }


searchMovie = (event)=>{
  this.setState({searchQuery: event.target.value})
}
  render() {

let filteredMovies = this.state.movies.filter(
  (movie)=>{
    return(
    movie.title.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1)
  }
)

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
        <h1>Popular Movies APP</h1>

        <Searchbar
        searchMovieProp ={this.searchMovie}
        />
        <MovieList
        
        movies={filteredMovies}
        deleteMovieProp={this.deleteMovie}
        />


      </div>
    );
  }
}

export default App;
