import Link from 'next/link'
import React from 'react'
import style from '../styles/index.module.css'
import Home from './Home'
const index = () => {
  return (
    <div className={style.Navbar}>
      <Home/>
      {/* <ul className={style.ul}>
    
      <li><Link href="/">Home</Link></li> 
        <li><Link href="/Dashboard">Dashboard</Link></li>
        <li><Link href="/About"> About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/know_more">know more</Link></li>
      </ul> */}
    </div>
  )
}

export default index