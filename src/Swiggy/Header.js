import React from 'react'
import './Header.css';


const Title=()=>{
    return(
        <img alt='logo' style={{width:"100px", height:"100px" ,borderRadius:"20px", padding:"10px"}} src='https://www.lowyat.net/wp-content/uploads/2023/08/Apple-MacBook-Air-15-review-1.jpg'/>
    )
}
function Header() {
  return (
    <div className='header'>
        <Title/>
        <div className='nav-item'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
