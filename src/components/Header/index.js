import styles from './styles.module.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.sticky}>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="nav-link" to='/'>Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="nav-item">
                <Link className="nav-link" to='challenges'>Your Challenges</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='what'>What We Do</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='approach'>Our Approach</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='contact'>Let's Talk</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
