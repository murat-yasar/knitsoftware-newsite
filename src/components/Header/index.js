import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
     <nav className="sticky-top navbar navbar-expand-md bg-body-tertiary">
       <div className={`container-fluid ${styles.menu}`}>
         <Link className="navbar-brand" to="/">
             <a className="navbar-brand" href="/">
               <div className="d-flex align-items-center flex-column mb-0">
                 <span className={styles.styleKnit}>
                   <strong>KNIT</strong>
                 </span>
                 <span className={styles.styleSoftware}>software</span>
               </div>
             </a>
         </Link>
         <button 
           className="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse" 
           data-bs-target="#navbarSupportedContent" 
           aria-controls="navbarSupportedContent" 
           aria-expanded="false" 
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className={`navbar-nav w-100 justify-content-around text-uppercase ${styles.menuList}`}>
             <li className="nav-item">
               <Link className="nav-link" to="challenges">Your Challenges</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="what">What We Do</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="approach">Our Approach</Link>
             </li>
             <li className="nav-item">
               <Link className={`nav-link ${styles.btnTalk}`} to="contact">LET'S TALK</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
  )
}