import React, { useState } from 'react';
import { initialProducts, sliderBanners } from './productData';
import type { Product } from './types';
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
  PlusCircle,
  Search
} from 'lucide-react';
import './App.css';

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
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
    setProducts(current => current.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const handleDecreaseQty = (id: number) => {
    setProducts(current => current.map(p => p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  // Add to cart
  const handleAddToCart = (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product || product.quantity === 0) return;

    setProducts(current => current.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Add product form submit
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!image.trim() || !name.trim() || !category || !description.trim() || !specification.trim() || !price || quantity === '') {
      setFormError('Please fill in all required fields before submitting.');
      setFormSuccess(false);
      return;
    }

    const priceNum = Number(price);
    const qtyNum = Number(quantity);

    if (!Number.isFinite(priceNum) || priceNum <= 0 || !Number.isInteger(qtyNum) || qtyNum < 0) {
      setFormError('Enter a price greater than zero and a whole-number quantity of zero or more.');
      setFormSuccess(false);
      return;
    }

    const newProd: Product = {
      id: Date.now(),
      image: image.trim(),
      name: name.trim(),
      category,
      description: description.trim(),
      specification: specification.trim(),
      rating: Number(rating),
      price: priceNum,
      quantity: qtyNum,
      isFeatured
    };

    setProducts(current => [...current, newProd]);
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
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = !normalizedQuery
      || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(p => p.isFeatured);
  const lowStockCount = products.filter(p => p.quantity < 5).length;
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);

  // Computed Totals
  const overallTotal = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <div className="app-wrapper">
      {/* 1. NAVIGATION HEADER */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="brand-mark"><Package size={22} className="brand-icon" /></span>
          <div>
            <h2>Stockroom</h2>
            <span className="brand-caption">PRODUCT WORKSPACE</span>
          </div>
        </div>
        <div className="nav-menu">
          <a href="#slider">Home</a>
          <a href="#featured">Featured</a>
          <a href="#products">Products</a>
          <a href="#add-new">Add New Product</a>
        </div>
        <div className="nav-total">
          <span className="cart-count"><ShoppingCart size={15} /> {cartCount} in cart</span>
          <span className="nav-total-label">Inventory value</span>
          <strong>₱{overallTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
        </div>
      </nav>

      {/* 2. SLIDER SECTION */}
      <section id="slider" className="slider-section">
        <div className="slider-card" style={{ background: sliderBanners[currentSlide].bg }}>
          <button className="slide-btn prev" onClick={prevSlide} aria-label="Previous banner"><ChevronLeft size={22} /></button>
          <div className="slide-content">
            <span className="eyebrow">YOUR INVENTORY, IN FOCUS</span>
            <h1>{sliderBanners[currentSlide].title}</h1>
            <p>{sliderBanners[currentSlide].subtitle}</p>
            <a className="hero-link" href="#products">Explore products <ChevronRight size={16} /></a>
          </div>
          <button className="slide-btn next" onClick={nextSlide} aria-label="Next banner"><ChevronRight size={22} /></button>
          <div className="slide-indicators" aria-label="Choose banner">
            {sliderBanners.map((banner, index) => (
              <button
                key={banner.id}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show banner ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section id="featured" className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">HAND-PICKED FOR YOU</span>
            <h2 className="section-title">Featured products</h2>
          </div>
          <a className="text-link" href="#products">View all products <ChevronRight size={16} /></a>
        </div>
        <div className="featured-row">
          {featuredProducts.map((p) => (
            <button key={p.id} className="featured-card" onClick={() => setSelectedProduct(p)}>
              <div className="featured-image"><img src={p.image} alt="" /></div>
              <div className="featured-info">
                <span className="cat-badge">{p.category}</span>
                <h4>{p.name}</h4>
                <p className="price">₱{p.price.toLocaleString()}</p>
              </div>
              <span className="featured-arrow"><ChevronRight size={17} /></span>
            </button>
          ))}
          {featuredProducts.length === 0 && <p className="empty-state">No featured products yet. Add one below to highlight it here.</p>}
        </div>
      </section>

      {/* 4. MAIN PRODUCTS SECTION WITH CATEGORY FILTER */}
      <section id="products" className="section-container">
        <div className="products-header">
          <div>
            <span className="section-kicker">INVENTORY OVERVIEW</span>
            <h2 className="section-title">Your products <span className="product-count">{products.length}</span></h2>
            <p className="section-description">{lowStockCount} {lowStockCount === 1 ? 'item needs' : 'items need'} a restock</p>
          </div>
          <div className="product-tools">
            <label className="search-field">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </label>
            <label className="category-filter">
              <Layers size={17} />
              <select aria-label="Filter by category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => {
            const subtotal = product.price * product.quantity;
            const isLowStock = product.quantity < 5;

            return (
              <article key={product.id} className={`product-card ${isLowStock ? 'low-stock' : ''}`}>
                {isLowStock && (
                  <span className="low-stock-badge"><AlertTriangle size={12} /> Low stock</span>
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
                      <button aria-label={`Decrease ${product.name} stock`} onClick={() => handleDecreaseQty(product.id)} disabled={product.quantity === 0}><Minus size={14} /></button>
                      <span aria-live="polite">{product.quantity}</span>
                      <button aria-label={`Increase ${product.name} stock`} onClick={() => handleIncreaseQty(product.id)}><Plus size={14} /></button>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button className="btn-view" onClick={() => setSelectedProduct(product)}>
                      <Eye size={16} /> Details
                    </button>

                    {product.quantity > 0 ? (
                      <button className="btn-add-cart" onClick={() => handleAddToCart(product.id)}>
                        <ShoppingCart size={16} /> Add to cart
                      </button>
                    ) : (
                      <button className="btn-out" disabled>Out of Stock</button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          {filteredProducts.length === 0 && (
            <div className="empty-state products-empty">
              <Search size={22} />
              <strong>No products found</strong>
              <span>Try a different search or category.</span>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>Clear filters</button>
            </div>
          )}
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
                <input type="url" placeholder="https://..." value={image} onChange={(e) => setImage(e.target.value)} required />
              </div>

              <div className="field">
                <label>Product Name *</label>
                <input type="text" placeholder="Product Title" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="field">
                <label>Category *</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="Electronics">Electronics</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div className="field">
                <label>Rating (1-5) *</label>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))} required>
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>

              <div className="field">
                <label>Price (₱) *</label>
                <input type="number" placeholder="0.00" min="0.01" step="any" value={price} onChange={(e) => setPrice(e.target.value)} required />
              </div>

              <div className="field">
                <label>Initial Quantity *</label>
                <input type="number" placeholder="0" min="0" step="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
              </div>
            </div>

            <div className="field full">
              <label>Description *</label>
              <textarea rows={2} placeholder="Brief summary" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <div className="field full">
              <label>Specification *</label>
              <textarea rows={2} placeholder="Specs details" value={specification} onChange={(e) => setSpecification(e.target.value)} required />
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
          <div className="modal-body" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close product details" onClick={() => setSelectedProduct(null)}><X size={20} /></button>
            <div className="modal-content">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div>
                <span className="cat-badge">{selectedProduct.category}</span>
                <h2 id="product-modal-title">{selectedProduct.name}</h2>
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