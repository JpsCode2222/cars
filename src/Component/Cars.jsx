import React from 'react'
import '../style.css';
export default function Cars(props) {
  return (
    <>
    <div className="carSection" style={{backgroundImage:`url('/Images/${props.bgimg}')`}}>
        <div className="carModal">
            <div data-aos='fade'>{props.title}</div>
            <p>{props.desc}</p>
        </div>
        <div className="buttongrp">
            <button className='btn btn-dark p-2 mr-5 text-bold text-white rounded-pill'>CUSTOM ORDER</button>
           {
            props.desc && <button className='btn btn-light p-2 text-bold text-black rounded-pill'>EXISTING INVENTORY</button>
           } 
        </div>
    </div>
    </>
  )
}
