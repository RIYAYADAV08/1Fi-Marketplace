import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeSection, setActiveSection] = useState("marketplace");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedEmi, setSelectedEmi] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError("Unable to load products.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
    setSelectedEmi(null);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedVariant("");
    setSelectedEmi(null);
  };

  const handleProceed = () => {
    if (!selectedProduct || !selectedEmi) {
      return;
    }

    alert(
      `Selected ${selectedEmi.months}-month EMI plan for ${selectedProduct.name}`
    );
  };

  return (
    <div className="app">
      <header className="header">
        <p className="welcome">Shop</p>
        <h1>What are you looking for?</h1>
      </header>

      <nav className="shop-tabs">
        <button
          type="button"
          className={activeSection === "brands" ? "active" : ""}
          onClick={() => setActiveSection("brands")}
        >
          Top Brands
        </button>

        <button
          type="button"
          className={activeSection === "nearby" ? "active" : ""}
          onClick={() => setActiveSection("nearby")}
        >
          Nearby Stores
        </button>

        <button
          type="button"
          className={activeSection === "marketplace" ? "active" : ""}
          onClick={() => setActiveSection("marketplace")}
        >
          1Fi Marketplace
        </button>
      </nav>

      <main>
        {activeSection === "brands" && (
          <section className="empty-section"></section>
        )}

        {activeSection === "nearby" && (
          <section className="empty-section"></section>
        )}

        {activeSection === "marketplace" && (
          <section className="marketplace">
            <div className="section-heading">
              <div>
                <p className="eyebrow">1Fi</p>
                <h2>Marketplace</h2>
              </div>

              {!loading && !error && (
                <span>{products.length} Products</span>
              )}
            </div>

            {loading && <p>Loading products...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
              <div className="product-grid">
                {products.map((product) => {
                  const lowestEmi = Math.min(
                    ...product.emiPlans.map((plan) => plan.monthly)
                  );

                  return (
                    <article className="product-card" key={product.id}>
                      <div className="product-image">
                        <img
                          src={product.image}
                          alt={product.name}
                        />
                      </div>

                      <div className="product-content">
                        <h3>{product.name}</h3>

                        <p className="price">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>

                        <p className="emi-preview">
                          EMI from ₹
                          {lowestEmi.toLocaleString("en-IN")}
                          /month
                        </p>

                        <button
                          type="button"
                          className="view-button"
                          onClick={() => openProduct(product)}
                        >
                          View details
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </main>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={closeProduct}>
          <section
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-button"
              onClick={closeProduct}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="detail-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="details">
              <p className="eyebrow">Product Details</p>

              <h2>{selectedProduct.name}</h2>

              <p className="detail-price">
                ₹{selectedProduct.price.toLocaleString("en-IN")}
              </p>

              <p className="description">
                {selectedProduct.details}
              </p>

              <div className="option-group">
                <h4>Variants</h4>

                <div className="variants">
                  {selectedProduct.variants.map((variant) => (
                    <button
                      type="button"
                      key={variant}
                      className={
                        selectedVariant === variant ? "selected" : ""
                      }
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <h4>Select EMI Plan</h4>

                <div className="emi-list">
                  {selectedProduct.emiPlans.map((plan) => (
                    <button
                      type="button"
                      key={plan.id}
                      className={
                        selectedEmi?.id === plan.id
                          ? "emi selected"
                          : "emi"
                      }
                      onClick={() => setSelectedEmi(plan)}
                    >
                      <span>{plan.months} months</span>

                      <strong>
                        ₹{plan.monthly.toLocaleString("en-IN")}/month
                      </strong>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="proceed-button"
                disabled={!selectedEmi}
                onClick={handleProceed}
              >
                Proceed with selected plan
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;