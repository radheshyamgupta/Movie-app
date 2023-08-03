import React from 'react'
import Movie from './Movie'
import "./Movielist.css"
export default function MovieList(props) {
    return (
        <div className="movielist">
            <Movie title={props.MOVIELIST}></Movie>
        </div>
    )
}
