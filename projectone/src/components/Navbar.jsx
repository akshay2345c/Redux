import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {
  const cartitem = useSelector((state) => state.Cart.products)
  return (
    <header className="navbar">
      <div className="navbar__brand">ShopLite</div>
      <nav className="navbar__nav">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/products" className="navbar__link">Products</Link>
        <Link to="/cart" className="navbar__link cartposition">Cart <span className='cartnumber'>{cartitem.length}</span></Link>
      </nav>
    </header>
  )
}

export default Navbar
