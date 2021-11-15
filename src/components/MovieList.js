import React, { Component } from 'react'

 class MovieList extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-lg-4">
                  <div className="card mb-4 shadow-sm">
                      <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg" className="card-img-top" alt="sample Movie"/>
                    <div className="card-body">
                        <h5 className="card-title">Sample Movie</h5>
                        <p  className="card-text">Sample movie desc.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                            <h2><span className="badge bg-info">9.1</span></h2>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default MovieList