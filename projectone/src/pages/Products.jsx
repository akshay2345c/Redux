import { useEffect } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductsSlice"; // ⭐ IMPORT THIS

function Products() {
  const dispatch = useDispatch();

  // ⭐ GET DATA FROM REDUX STATE
  const { products, loading, error } = useSelector((state) => state.products);

  // ⭐ FETCH API ONCE WHEN COMPONENT MOUNTS
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className="page">
      <section>
        <h1>Products</h1>
        <p className="page__description">
          Product list from API using Redux Toolkit + Axios
        </p>
      </section>

      {/*  LOADING UI */}
      {loading && <p>Loading...</p>}

      {/*  ERROR UI */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/*  DISPLAY PRODUCT LIST */}
      <div className="products-grid">
        {products &&
          products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card__image"
                />
              </div>
              <div className="product-card__body">
                <h2 className="product-card__title">{product.title}</h2>
                <p className="product-card__description">
                  {product.description}
                </p>
                <p className="product-card__price">${product.price}</p>
              </div>
              <button className="product-card__button" type="button">
                Add to cart
              </button>
            </article>
          ))}
      </div>
    </main>
  );
}

export default Products;

