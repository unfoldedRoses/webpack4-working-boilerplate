import React, { Component } from 'react'
import ReactDOM from "react-dom"
import "./styles/main.scss"
// console.log("I Love REACTJS dsdsd ssss ssss ssss sdsds xxxx ") 


// fetch(`https://jsonplaceholder.typicode.com/posts`)
//    .then(res => res.json())
//    .then(posts => console.log(posts))

//    console.log(posts)

function App(){
 return (<div>


<div className="dark fadeOut"></div>
<div className="sun slideIn"></div>
<h1 className="fadeIn">Happy Mothers Day 2018</h1>
<p className="fadeIn">
  Today I think about my wife and how grateful I am she is there for me and my children.
</p>
 <h2 className="fadeIn delay-1">Love Oli</h2> 
<section className="flowers">
  <div className="flower">
    <div className="flower_head pulse"></div>
    <div className="flower_stem grow-12"></div>
  </div>
  <div className="flower">
    <div className="flower_head pulse pink"></div>
    <div className="flower_stem grow-15"></div>
  </div>
  <div className="flower">
    <div className="flower_head pulse yellow"></div>
    <div className="flower_stem grow-9"></div>
  </div>
  <div className="flower">
    <div className="flower_head pulse red"></div>
    <div className="flower_stem grow-12"></div>
  </div>
</section>
</div>)
}

ReactDOM.render(<App/>,document.getElementById("app"))

if(module.hot){
    module.hot.accept()
}
