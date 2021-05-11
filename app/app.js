import React, { Component } from 'react'
import ReactDOM from "react-dom"
import "./styles/main.scss"
// console.log("I Love REACTJS dsdsd ssss ssss ssss sdsds xxxx ") 


// fetch(`https://jsonplaceholder.typicode.com/posts`)
//    .then(res => res.json())
//    .then(posts => console.log(posts))

//    console.log(posts)

function App(){
 return  <h1>Hellow From Webpack!</h1>
}

ReactDOM.render(<App/>,document.getElementById("app"))

if(module.hot){
    module.hot.accept()
}
