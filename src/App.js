import React, { useState } from 'react'
import './App.css'

function User(props){
  return (
  <div className = "user">
  <img className="user-photo" src={props.link} alt = {props.alt}/>
  <h2 className="user-text">{props.userName}</h2>
</div>)
}

function Gallery(props){

  const bigImage = event=> event.target.classList.toggle('big-image')

  return (
    <div className="grid-image">
    {props.gallery.map(el => <img onClick={bigImage} className = "grid-item" key={el.id} src={el.link} alt={el.alt}/>)}
  </div>

  )
  }

function App(){
  let [user, setUser] = useState({
    userName : "Zbyszek",
      profilePhoto: "https://bit.ly/2HOtooK",
  })
  let [gallery,setGallery] = useState([
      {
        id: 0,
        link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOjFQ39e6JgMQ4fb88W6cNp-LPM1KkwLpD75W0J8cxBzBKGCzNA" ,
        alt: "zdj",
      }, 
      {
        id: 1,
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbC57Z2gpNmI1V3IEZ7WwBA4XjZRaOY6Cam5tInjdglQ8kN6t0bg",
        alt:"cos",
      },
      {
        id:2,
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26kCiWG9yumtuzgXSMFFI7KdECBUGHCwPqwaw_LuD8KBCmAc7VA",
        alt: "xd",
      }
    ])
    return (
      <main>
        <User link = {user.profilePhoto} alt = "Fotka Profilowa" userName={user.userName} />
        <Gallery gallery = {gallery} />
      </main>
    )
  }



export default App