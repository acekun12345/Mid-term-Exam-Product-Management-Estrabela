import React, { useState } from 'react';
import { initialProducts, sliderBanners } from './productData';
import { Product } from './types';
import { 
  Package, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Eye, 
  Star, 
  AlertTriangle, 
  X, 
  CheckCircle,
  Layers,
  PlusCircle
} from 'lucide-react';
import './App.css';

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  // Form State
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [description, setDescription] = useState('');
  const [specification, setSpecification] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Category Options
  const categories = ['All', 'Electronics', 'Apparel', 'Accessories', 'Home'];

  // Slide navigation
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderBanners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderBanners.length) % sliderBanners.length);

  // Quantity adjustments
  const handleIncreaseQty = (id: number) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const handleDecreaseQty = (id: number) => {
    setProducts(products.map(p => p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  // Add to cart
  const handleAddToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Add product form submit
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!image || !name || !category || !description || !specification || !price || !quantity) {
      setFormError('Please fill in all required fields before submitting.');
      setFormSuccess(false);
      return;
    }

    const priceNum = parseFloat(price);
    const qtyNum = parseInt(quantity, 10);

    if (isNaN(priceNum) || priceNum <= 0 || isNaN(qtyNum) || qtyNum < 0) {
      setFormError('Please enter valid positive numbers for price and quantity.');
      setFormSuccess(false);
      return;
    }

    const newProd: Product = {
      id: Date.now(),
      image,
      name,
      category,
      description,
      specification,
      rating: Number(rating),
      price: priceNum,
      quantity: qtyNum,
      isFeatured
    };

    setProducts([...products, newProd]);
    setFormError('');
    setFormSuccess(true);

    // Reset Form
    setImage('');
    setName('');
    setCategory('Electronics');
    setDescription('');
    setSpecification('');
    setRating(5);
    setPrice('');
    setQuantity('');
    setIsFeatured(false);

    setTimeout(() => setFormSuccess(false), 3000);
  };

  // Filtered Products
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const featuredProducts = products.filter(p => p.isFeatured);

  // Computed Totals
  const overallTotal = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <div className="app-wrapper">
      {/* 1. NAVIGATION HEADER */}
      <nav className="navbar">
        <div className="nav-brand">
          <Package size={28} className="brand-icon" />
          <h2>Product Manager App</h2>
        </div>
        <div className="nav-menu">
          <a href="#slider">Home</a>
          <a href="#featured">Featured</a>
          <a href="#products">Products</a>
          <a href="#add-new">Add New Product</a>
        </div>
        <div className="nav-total">
          <span>Overall Total:</span>
          <strong>₱{overallTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
        </div>
      </nav>

      {/* 2. SLIDER SECTION */}
      <section id="slider" className="slider-section">
        <div className="slider-card" style={{ background: sliderBanners[currentSlide].bg }}>
          <button className="slide-btn prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
          <div className="slide-content">
            <h1>{sliderBanners[currentSlide].title}</h1>
            <p>{sliderBanners[currentSlide].subtitle}</p>
          </div>
          <button className="slide-btn next" onClick={nextSlide}><ChevronRight size={24} /></button>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section id="featured" className="section-container">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-row">
          {featuredProducts.map((p) => (
            <div key={p.id} className="featured-card">
              <img src={p.image} alt={p.name} />
              <div className="featured-info">
                <h4>{p.name}</h4>
                <p className="price">₱{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAIN PRODUCTS SECTION WITH CATEGORY FILTER */}
      <section id="products" className="section-container">
        <div className="products-header">
          <h2 className="section-title">Products</h2>
          <div className="category-filter">
            <Layers size={18} />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => {
            const subtotal = product.price * product.quantity;
            const isLowStock = product.quantity < 5;

            return (
              <div key={product.id} className={`product-card ${isLowStock ? 'low-stock' : ''}`}>
                {isLowStock && (
                  <span className="low-stock-badge"><AlertTriangle size={12} /> Low Stock (&lt;5)</span>
                )}
                <div className="img-holder">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-body">
                  <span className="cat-badge">{product.category}</span>
                  <h3>{product.name}</h3>

                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < product.rating ? 'gold' : 'gray'} />
                    ))}
                  </div>

                  <div className="price-details">
                    <div><span>Price:</span> <strong>₱{product.price.toLocaleString()}</strong></div>
                    <div><span>Subtotal:</span> <strong className="subtotal">₱{subtotal.toLocaleString()}</strong></div>
                  </div>

                  <div className="qty-row">
                    <span>Quantity:</span>
                    <div className="qty-controls">
                      <button onClick={() => handleDecreaseQty(product.id)} disabled={product.quantity === 0}><Minus size={14} /></button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncreaseQty(product.id)}><Plus size={14} /></button>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button className="btn-view" onClick={() => setSelectedProduct(product)}>
                      <Eye size={16} /> Details
                    </button>

                    {product.quantity > 0 ? (
                      <button className="btn-add-cart" onClick={() => handleAddToCart(product.id)}>
                        <ShoppingCart size={16} /> Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ''}
                      </button>
                    ) : (
                      <button className="btn-out" disabled>Out of Stock</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ADD NEW PRODUCT FORM SECTION */}
      <section id="add-new" className="section-container form-section">
        <div className="form-box">
          <h2 className="section-title"><PlusCircle size={22} /> Add New Product</h2>

          {formError && <div className="alert error"><AlertTriangle size={16} /> {formError}</div>}
          {formSuccess && <div className="alert success"><CheckCircle size={16} /> Product added successfully!</div>}

          <form onSubmit={handleAddProduct}>
            <div className="form-grid">
              <div className="field">
                <label>Feature Image URL *</label>
                <input type="text" placeholder="https://..." value={image} onChange={(e) => setImage(e.target.value)} />
              </div>

              <div className="field">
                <label>Product Name *</label>
                <input type="text" placeholder="Product Title" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="field">
                <label>Category *</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Electronics">Electronics</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div className="field">
                <label>Rating (1-5) *</label>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>

              <div className="field">
                <label>Price (₱) *</label>
                <input type="number" placeholder="0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div className="field">
                <label>Initial Quantity *</label>
                <input type="number" placeholder="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
            </div>

            <div className="field full">
              <label>Description *</label>
              <textarea rows={2} placeholder="Brief summary" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="field full">
              <label>Specification *</label>
              <textarea rows={2} placeholder="Specs details" value={specification} onChange={(e) => setSpecification(e.target.value)} />
            </div>

            <div className="checkbox-field">
              <input type="checkbox" id="featuredCheck" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
              <label htmlFor="featuredCheck">Add to Featured Products Row</label>
            </div>

            <button type="submit" className="btn-submit">Add New Product</button>
          </form>
        </div>
      </section>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}><X size={20} /></button>
            <div className="modal-content">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div>
                <span className="cat-badge">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-price">₱{selectedProduct.price.toLocaleString()}</p>
                <p><strong>Description:</strong> {selectedProduct.description}</p>
                <p><strong>Specification:</strong> {selectedProduct.specification}</p>
                <p><strong>Stock Remaining:</strong> {selectedProduct.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}