import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nabvarstyle.css"
import { FaBeer } from "react-icons/fa";
import { useState } from 'react';


export default function Nav()
    { 
        const [isopen, setIsOpen] = useState(false)

  return (
    
    <div className='outer_div'>
         <p>Agro<span className='fm'>Farms.</span></p>
        <div>
        <ul className={isopen ?"ul_list" :"ul_list1"}>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about" } onClick={()=>{
            setIsOpen (!isopen)
         } }>About Us</Link>
            </li><li>
                <Link    to={"/pricing"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Products</Link>
            </li><li>
                <Link   to={"/contact"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Choose Us</Link>
            </li><li>
                <Link   to={"/contact"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Team</Link>
            </li><li>
                <Link    to={"/pricing"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Pricing</Link>
            </li><li>
                <Link   to={"/contact"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Contact</Link>
            </li>
        </ul></div>
        <Link to={"/pricing"}><button className='btn'>Products</button></Link>
        
         <FaBeer className='icon' onClick={()=>{
            setIsOpen (!isopen)
         } }/>
    </div>
  )
}