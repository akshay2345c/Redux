import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../Redux/CartSlice' // Make sure this import is correct based on your project structure

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.Cart.products)
  
  // Calculate total price
  const totalPrice = products.reduce((total, product) => {
    return total + (product.price * (product.quantity || 1))
  }, 0)

  if (products.length === 0) {
    return (
      <main className="page">
        <h1>Your Cart</h1>
        <p className="page__description">
          Your shopping cart is empty. Start adding some products!
        </p>
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <h1>Your Cart</h1>
      <p className="page__description">
        Review your items before checkout
      </p>

      <div className="cart">
        {/* Cart Header */}
        <div className="cart-header">
          <div>Product</div>
          <div>Description</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Action</div>
        </div>

        {/* Cart Items */}
        {products.map((product) => (
          <div key={product.id} className="cart__item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="quantity">
              <span>{product.quantity || 1}</span>
            </div>
            <div className="price">
              ${(product.price * (product.quantity || 1)).toFixed(2)}
            </div>
            <button 
              onClick={() => dispatch(removeProduct(product))}
              aria-label={`Remove ${product.title} from cart`}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Cart Footer */}
        <div className="cart-footer">
          <div className="total-amount">
            Total: <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
