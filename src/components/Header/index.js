import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <ul className={styles.header}>
        <li>
          <Link to='/'>Logo</Link>
        </li>
        <li>
          <Link to='challenges'>Your Challenges</Link>
        </li>
        <li>
          <Link to='what'>What We Do</Link>
        </li>
        <li>
          <Link to='approach'>Our Approach</Link>
        </li>
        <li>
          <Link to='contact'>Let's Talk</Link>
        </li>
      </ul>
    </>
  )
}
