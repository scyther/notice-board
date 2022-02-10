import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <Image src='/logo.png' width="500" height="500" alt="logo" />
      <h1>NoticeBoard</h1>
    </a>

    <a role="button" className={`navbar-burger ${toggle ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setToggle(!toggle)}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${toggle ? "is-active" : ""}`}>
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        About
      </a>

      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar