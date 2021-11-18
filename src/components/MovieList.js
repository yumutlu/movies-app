 
const MovieList=(props) => {


  
        return (
            <div className="row">

{
    props.movies.map((movie)=>

 <div key={movie.id} className="col-lg-4">
                  <div className="card mb-4 shadow-sm ">
                      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className="card-img-top" alt="sample Movie"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p  className="card-text">{movie.overview}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" onClick={()=>props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                            <h2><span className="badge bg-info">{movie.vote_average}</span></h2>
                        </div>
                    </div>
                  </div>
              </div>
    )
   

}
             


            </div>
        )
    
}

export default MovieList