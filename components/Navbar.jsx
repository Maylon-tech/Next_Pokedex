import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    const [active, setActive] = useState(false)



  return (
    <navbar className={styles.navbar}>
        <div className={styles.logo}>
            <Image src="/navlogo.png" width={30} height={30}/>
        </div>
        <ul>
            <li className='active'>
                <Link href="/">Home</Link>
            </li>           
            <li>
                <Link href="/about">About</Link>
            </li>            
        </ul>
        <div className={styles.btn}>
            <button>Log in</button>
            <button>Menu</button>
        </div>
    </navbar>
  )
}

export default Navbar