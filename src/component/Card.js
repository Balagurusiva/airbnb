import React from "react"

export default function Card(props){
    
    return(
     
        <div className="card">
            
            <img src ={`../img/${props.items.coverImg}`} className="card--image" alt="men" />
           
            <div className="card--stats">
                <img src="../img/star.png" className="card--star" alt="star"/>
                <span>{props.items.stats.rating}</span>
                <span className="gray">({props.items.stats.reviewCount}) • </span>
                <span className="gray">{props.items.location}</span>
            </div>
         
            <p>{props.items.title}</p>
            <p><span className="bold">From ${props.items.price}</span> / person</p>
        </div>
       
    )
}