 
import React from "react"
import Nav from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./component/data"

export default function App(){

   const cards = data.map(item => {
    return(
        <Card 
         items = {item}        
    />
    )
   })
   return(
    <div>
        <Nav />  
        <Hero />
        <section className="card-list"> 
            {cards}
        </section>
    </div>
   )
}