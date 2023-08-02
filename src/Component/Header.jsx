import React ,{useState} from 'react'

function Header() {
    const[navbar , setNavbar]=useState(false);
  return (
    <>
    <div className='nav'>
    <img src="/Images/logo.svg" alt="logo" />
    <div className="mainMenu">
        <a href="model-s">Model S</a>
        <a href="model-s">Model 3</a>
        <a href="model-s">Model x</a>
        <a href="model-s">Model v</a>
        <a href="model-s">roof</a>
        <a href="model-s">Model Y</a>
        <a href="model-s">panel</a>
    </div>
    <div className="rightMenu">
           <div className="righttow">
           <a href="shop">Shop</a>
            <a href="Account">Account</a>
           </div>
        <a onClick={()=>{setNavbar(true)}}>Menu</a>
        </div>
       {navbar &&  <div data-aos="fade-left" className="mobile">
            <div className="closebtn" onClick={()=>{setNavbar(false)}}>X</div>
            <a href="model-s">Model S</a>
            <a href="model-3">Model 3</a>
            <a href="model-x">Model x</a>
            <a href="model-y">Model v</a>
            <a href="roof">roof</a>
            <a href="model-y">Model Y</a>
            <a href="panel">panel</a>
        </div>
}
    </div>
    </>
  )
}

export default Header