import React, { Component } from 'react'
import './App.css'

const User  = props => ( 
   <div className = "User">
     <img className="user-photo" src={props.link} alt = {props.alt}/>
     <h2 className="user-text">{props.userName}</h2>
   </div>)

const Gallery = props => (
  <div>
    {props.gallery.map( 
      el => <img key={el.id}
      src={el.link}
      alt={el.alt}/>
      )}
  </div>
)
class App extends Component {
  constructor(){
    super()    
    this.state = {
      userName : "      Zbyszek",
      profilePhoto: "https://bit.ly/2HOtooK",
      gallery: [
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
      ]
     }
}
render (){
  return (
    <main>
      <User link = {this.state.profilePhoto}
            alt=" Fotka Profilowa"
            userName={this.state.userName} />
        <Gallery gallery={this.state.gallery}/>
    </main>
  )
}
}

export default App