import './App.css'
import React from "react"
import { Bookmark } from 'lucide-react'
import {Card} from './components/card.jsx'
import {jobOpenings} from './data/user.jsx'
export default function App() {
  
  return (
    <div className="main" >
      {jobOpenings.map((user,idx) => (
    <div key={idx}>  <Card name={user.name} brandLogo={user.brandLogo} datePosted={user.datePosted} post={user.post} tag1={user.tag1} tag2={user.tag2} pay={user.pay} location={user.location}/></div>
      ))}
      
    </div>
  ) 
}
