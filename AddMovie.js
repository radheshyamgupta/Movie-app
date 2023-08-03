// import React,{useRef} from 'react'
// import "./AddMovie.css"
// export default function AddMovie() {
//    const titleInptValue=useRef("")
//    const openingTextValue=useRef("")
//    const realseDateValue=useRef("")
//    const buttonHnadler=()=>{
//     const buttonHandler = () => {
//       const movieDetail = {
//         title: titleInputValue.current.value,
//         opening: openingTextValue.current.value,
//         releaseDate: releaseDateValue.current.value,
//       };
//       console.log(movieDetail);
//     }
  

//   return (
//     <div className="addmovie">
//         <label>Title</label>
//         <input ref={titleInptValue}></input>
//         <label>Opening Text</label>
//         <textarea ref={openingTextValue}></textarea>
//         <label>Release Date </label>
//         <input ref={realseDateValue}></input>
//         <button className="add" onClick={buttonHnadler}>Add Moives</button>
//     </div>
//   )
// }
import React, { useRef } from 'react';
import "./AddMovie.css";

export default function AddMovie() {
  const titleInputValue = useRef("");
  const openingTextValue = useRef("");
  const releaseDateValue = useRef("");

  const buttonHandler = () => {
    const movieDetail = {
      title: titleInputValue.current.value,
      opening: openingTextValue.current.value,
      releaseDate: releaseDateValue.current.value,
    };
    console.log(movieDetail);
    titleInputValue.current.value = "";
    openingTextValue.current.value = "";
    releaseDateValue.current.value = "";

  }


  return (
    <div className="addmovie">
      <label>Title</label>
      <input ref={titleInputValue} />
      <label>Opening Text</label>
      <textarea ref={openingTextValue} />
      <label>Release Date</label>
      <input ref={releaseDateValue} />
      <button className="add" onClick={buttonHandler}>Add Movies</button>
    </div>
  )
}

