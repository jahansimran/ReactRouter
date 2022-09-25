import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-item">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <ul className="section-container">
        <li>
          <Link to="/" className="wave-heading">
            Home
          </Link>
        </li>
        <li>
          <Link className="wave-heading" to="/about">
            About
          </Link>
        </li>
        <hli>
          <Link className="wave-heading" to="/contact">
            Contact
          </Link>
        </hli>
      </ul>
    </nav>
  </>
)

export default Header
