import Link from 'next/link'
import style from '../styles/index.module.css'

import React from 'react'

const Home = () => {
  return (
    <div>
      <ul className={style.ul}>

      <li><Link href="/">Home</Link></li> 
        <li><Link href="/Dashboard">Dashboard</Link></li>
        <li><Link href="/About"> About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/Know_more">know more</Link></li>
      </ul>
    </div>
  )
}

export default Home