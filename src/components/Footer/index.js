import styles from './styles.module.css'
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbSquareLetterX } from "react-icons/tb";

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={`text-center text-lg-start text-white ${styles.footerBG}`} >
      <section className="pt-3">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 mx-auto mb-4 d-flex flex-column">
              <Link to="about" className="text-white text-decoration-none"> About Us </Link>
              <Link to="clients" className="text-white text-decoration-none"> Our Clients </Link>
              <Link to="products" className="text-white text-decoration-none"> Our Products </Link>
              <Link to="contact" className="text-white text-decoration-none"> Careers </Link>
            </div>

            <div className={`col-md-3 mx-auto mb-4 d-flex flex-column ${styles.colMiddle}`}>
              <Link to="terms" className="text-white text-decoration-none"> Terms of Service </Link>
              <Link to="privacy" className="text-white text-decoration-none"> Privacy Policy </Link>
              <Link to="cookie" className="text-white text-decoration-none"> Cookie Policy </Link>
            </div>

            <div className="col-md-3 mx-auto mb-4" ></div>

            <div className={`col-md-3 mx-auto mb-md-0 mb-4 ${styles.colRight}`} >
              <h1>
                <Link className="navbar-brand" to="/">
                  <div className="d-flex align-items-center flex-column">
                    <span className={`${styles.fredokaKnit} ${styles.styleKnit}`}><strong>KNIT</strong></span>
                    <span className={`${styles.styleSoftware}`}>software</span>
                  </div>
                </Link>
              </h1>

              <div className="col fs-1 gap-3 d-flex justify-content-center align-items-center mt-3" >
                <Link href="/" className="text-white"><FaFacebook/></Link>
                <Link href="/" className="text-white"><TbSquareLetterX/></Link>
                <Link href="/" className="text-white"><FaLinkedinIn/></Link>
                <Link href="/" className="text-white"><FaYoutube/></Link>
              </div>
            
              <div className="d-flex justify-content-center align-items-center mt-2"  >
                <Link to='contact' className={`btn round-0 mt-1 ${styles.btnContactUs}`} >CONTACT US</Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="text-start p-3 fs-5" >
        <Link to="/" className="text-white text-decoration-none"> KnitSoftware.com </Link>
        © 2024 All Rights reserved..
      </div>
    </footer>
  )
}