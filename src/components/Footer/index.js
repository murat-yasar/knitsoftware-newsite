import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <ul className={styles.footer}>
      <li>
        <ul className={styles.column}>
          <li>
            <Link to='about'>About Us</Link>
          </li>
          <li>
            <Link to='clients'>Our Clients</Link>
          </li>
          <li>
            <Link to='products'>Our Products</Link>
          </li>
          <li>
            <Link to='contact'>Careers</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul className={styles.column}>
          <li>
            <Link to='terms'>Terms of Service</Link>
          </li>
          <li>
            <Link to='privacy'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='cookie'>Cookie Policy</Link>
          </li>
        </ul>
      </li>
      <li></li>
      <li>
        <ul className={styles.column}>
            <li>
              <Link to='/'>Logo</Link>
            </li>
            <li>
              <ul className={styles.social}>
                <li>Facebook</li>
                <li>X</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </li>
            <li>
              <Link to='contact'>Contact Us</Link>
            </li>
          </ul>
      </li>
    </ul>
  )
}