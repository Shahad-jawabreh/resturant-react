import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link to='/' className="nav-link fw-bold">Home Page</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fw-bold" to='/resturant'>Menu</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}
