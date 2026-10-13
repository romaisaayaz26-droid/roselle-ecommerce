/**
 * ROSÉLLE Main JavaScript Controller
 * Handles Cart, Wishlist, Filtering, Rendering, and Interactions
 */

// Local Storage Keys
const CART_STORAGE_KEY = 'roselle_cart_v1';
const WISHLIST_STORAGE_KEY = 'roselle_wishlist_v1';

// --- LocalStorage Helpers ---
function getCart() {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateNavBadges();
}

function addToCart(productId, quantity = 1, variant = null) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const selectedVariant = variant || (product.variants ? product.variants[0] : null);

  const existingIndex = cart.findIndex(item => item.id === productId && item.variant === selectedVariant);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: product.categoryName,
      variant: selectedVariant,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" to your bag`, 'bi-bag-check-fill');
}

function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart(cart);
    showToast(`Removed "${item.name}" from cart`, 'bi-trash');
  }
}

function updateCartQuantity(index, quantity) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    if (quantity <= 0) {
      removeFromCart(index);
    } else {
      cart[index].quantity = quantity;
      saveCart(cart);
    }
  }
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateNavBadges();
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15.00;
  const promoDiscount = sessionStorage.getItem('roselle_promo_discount') ? parseFloat(sessionStorage.getItem('roselle_promo_discount')) : 0;
  const discountAmount = (subtotal * promoDiscount);
  const total = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shipping : 0));

  return {
    subtotal: subtotal.toFixed(2),
    shipping: shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`,
    shippingNum: shipping,
    discountAmount: discountAmount.toFixed(2),
    total: total.toFixed(2),
    itemCount: itemCount
  };
}

// --- Wishlist Helpers ---
function getWishlist() {
  const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  const product = getProductById(productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist`, 'bi-heart');
  } else {
    wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to wishlist`, 'bi-heart-fill');
  }

  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  updateNavBadges();
  
  // Update heart buttons on current page
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(productId));
    btn.querySelector('i').className = wishlist.includes(productId) ? 'bi bi-heart-fill text-danger' : 'bi bi-heart';
  });
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// --- Navbar Badges Update ---
function updateNavBadges() {
  const cartTotals = getCartTotals();
  const wishlist = getWishlist();

  const cartBadges = document.querySelectorAll('.cart-count-badge');
  cartBadges.forEach(badge => {
    badge.textContent = cartTotals.itemCount;
    badge.style.display = cartTotals.itemCount > 0 ? 'flex' : 'none';
  });

  const wishlistBadges = document.querySelectorAll('.wishlist-count-badge');
  wishlistBadges.forEach(badge => {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

// --- Toast Notifications ---
function showToast(message, iconClass = 'bi-check-circle-fill') {
  let container = document.querySelector('.roselle-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'roselle-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'roselle-toast';
  toast.innerHTML = `<i class="bi ${iconClass} text-warning fs-5"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- Dynamic Product Card Component HTML ---
function createProductCardHTML(product) {
  const inWish = isInWishlist(product.id);
  const isSale = product.originalPrice && product.originalPrice > product.price;

  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="product-card">
        <div class="product-img-wrap">
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';">
          </a>
          <div class="product-badges">
            ${product.isNew ? '<span class="badge-tag badge-new">New</span>' : ''}
            ${product.isBestSeller ? '<span class="badge-tag badge-bestseller">Best Seller</span>' : ''}
            ${isSale ? '<span class="badge-tag badge-deal">Sale</span>' : ''}
          </div>
          <button class="wishlist-btn ${inWish ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}')" title="Add to Wishlist">
            <i class="bi ${inWish ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
          </button>
        </div>
        <div class="product-body">
          <div class="product-category">${product.categoryName}</div>
          <h3 class="product-name">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            <i class="bi bi-star-fill"></i>
            <span>${product.rating} (${product.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <div>
              <span class="product-price">$${product.price.toFixed(2)}</span>
              ${isSale ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="btn-add-cart" onclick="addToCart('${product.id}')" title="Add to Cart">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Search Modal Trigger ---
function initSearchModal() {
  const searchBtns = document.querySelectorAll('.trigger-search');
  searchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const query = prompt('Search ROSÉLLE Catalog (e.g. Silk, Rose, Leather, Watch):');
      if (query && query.trim() !== '') {
        window.location.href = `shop.html?search=${encodeURIComponent(query.trim())}`;
      }
    });
  });
}

// Initialize common navbar state on script load
document.addEventListener('DOMContentLoaded', () => {
  updateNavBadges();
  initSearchModal();
});

// --- Category Page Initialization Helper ---
function initCategoryPage(categoryId) {
  document.addEventListener('DOMContentLoaded', () => {
    const categoryInfo = getCategoryInfo(categoryId);
    if (!categoryInfo) return;

    // Set page title & hero
    const pageTitleEl = document.getElementById('cat-title');
    const pageDescEl = document.getElementById('cat-desc');
    const pageBannerEl = document.getElementById('cat-banner');
    
    if (pageTitleEl) pageTitleEl.textContent = categoryInfo.name;
    if (pageDescEl) pageDescEl.textContent = categoryInfo.description;
    if (pageBannerEl) pageBannerEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${categoryInfo.bannerImg}')`;

    const searchInput = document.getElementById('cat-search-input');
    const sortSelect = document.getElementById('cat-sort-select');
    const grid = document.getElementById('cat-products-grid');
    const countLabel = document.getElementById('cat-count-label');
    const emptyState = document.getElementById('cat-empty-state');

    function filterAndRenderCat() {
      let items = getProductsByCategory(categoryId);

      // Search input
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      if (q) {
        items = items.filter(p => 
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }

      // Sort select
      const sortVal = sortSelect ? sortSelect.value : 'featured';
      if (sortVal === 'price-low') {
        items.sort((a, b) => a.price - b.price);
      } else if (sortVal === 'price-high') {
        items.sort((a, b) => b.price - a.price);
      } else if (sortVal === 'rating') {
        items.sort((a, b) => b.rating - a.rating);
      }

      if (countLabel) countLabel.textContent = `Showing ${items.length} product${items.length !== 1 ? 's' : ''}`;

      if (grid) {
        if (items.length === 0) {
          grid.innerHTML = '';
          if (emptyState) emptyState.classList.remove('d-none');
        } else {
          if (emptyState) emptyState.classList.add('d-none');
          grid.innerHTML = items.map(p => createProductCardHTML(p)).join('');
        }
      }
    }

    if (searchInput) searchInput.addEventListener('input', filterAndRenderCat);
    if (sortSelect) sortSelect.addEventListener('change', filterAndRenderCat);

    filterAndRenderCat();
  });
}
