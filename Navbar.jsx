import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart_icon from '../Assests/cart_icon.png'
import logo from '../Assests/logo.png'
import './Navbar.css'
export const Navbar = () => {
    const [menu,setMenu]  = useState("shop")
  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
       </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration : 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration : 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womans")}}><Link style={{ textDecoration : 'none'}} to='/Womans'>Woman</Link>{menu==="Womans"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration : 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
       </div>
    </div>
  )
}

export default Navbar