import React from 'react'
import "./Movie.css"

export default function Movie(props) {
  return (
    <div className="movie">
        <div className="movieDiv">
        {props.title.map((list)=>{
            return <li>
                <h2>{list.title}</h2>
                <p>{list.opening_crawl}</p>
            </li>
        })}
        </div>
   
    </div>
  )
}
