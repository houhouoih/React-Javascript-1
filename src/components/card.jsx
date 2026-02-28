import React from "react"
import { Bookmark } from 'lucide-react'
export function Card(props) {
   return(
      
      <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt="placeholder" />
        <button>Save <Bookmark size={18}/></button>
    </div>
      <div className="center">
        <h3>{props.name}<span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div>
      <h4>{props.tag1}</h4>
      <h4>{props.tag2}</h4>
    </div>
    </div>
      <div className="bottom">
      <div><h3>{props.pay}$/hr</h3>
        <p>{props.location}</p>
        
    </div>
      <button>Apply now</button>
      </div>
    </div>
     
   )
   
}
