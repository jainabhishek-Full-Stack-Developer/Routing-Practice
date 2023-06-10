import './index.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            className="logo"
            alt="wave"
          />
          <h1>Wave</h1>
        </div>
        <div className="menuContainer">
          <ul>
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
              <Link to="/about" className="navLink">
                About
              </Link>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Header
