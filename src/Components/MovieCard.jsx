import React from 'react'
import "./style.css"

function MovieCard(props) {
    const { title, voting, totalVoted, releasedDate,language, genre,poster,stars, director, pageViews } = props
  return (
    <div className='col-md-6 col-lg-6 col-sm-12 mt-2 mb-2'>
       <div className="card">
          <div className="row">
              <div className="col-md-2 col-lg-2 col-sm-2">
                  <div className="votes">
                      <i className="bi bi-caret-up-fill"></i>
                        <strong> { voting } </strong>
                      <i className="bi bi-caret-down-fill"></i>
                  </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4">
                    <img src={poster? poster : ''} alt="no image" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6">
                    <h2> { title } </h2>
                    <p>
                        <strong>Genre:</strong>
                        <span> {genre} </span>
                    </p>
                    <p>
                        <strong>Director:</strong>
                        <span> {director} </span>
                    </p>
                    <p>
                        <strong>Starring:</strong>
                        <span> {stars} </span>
                    </p>
                    <p>
                        Mins | {language} | { new Date(releasedDate).toDateString() }
                    </p>
                    <p>
                        {pageViews} views | voted by { totalVoted} people
                    </p>
              </div>
          </div>
          <div className='card-footer mt-2'>
                <a href={'#'} target='_blank' className="btn btn-primary w-100">Watch Trailer</a>
          </div>
       </div>

    </div>
  )
}

export default MovieCard
