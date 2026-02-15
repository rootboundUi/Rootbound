// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  setupEventListeners();
  updateCartCount();
});

// Initialize Theme
function initializeTheme() {
  console.log('Rootbound theme initialized');
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Product variant selection
  const variantSelects = document.querySelectorAll('select[name*="options"]');
  variantSelects.forEach(select => {
    select.addEventListener('change', updateProductVariant);
  });

  // Search functionality
  const searchTrigger = document.querySelector('.search-trigger');
  if (searchTrigger) {
    searchTrigger.addEventListener('click', openSearch);
  }

  // Cart form submission
  const productForm = document.querySelector('.product-form');
  if (productForm) {
    productForm.addEventListener('submit', handleAddToCart);
  }
}

// Update Product Variant
function updateProductVariant(e) {
  const selectedVariant = e.target.value;
  console.log('Variant selected:', selectedVariant);
  // Implementation for variant selection
}

// Handle Add to Cart
function handleAddToCart(e) {
  const btn = e.currentTarget.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Adding...';
  
  setTimeout(() => {
    updateCartCount();
    btn.disabled = false;
    btn.textContent = 'Add to Cart';
    showNotification('Product added to cart!');
  }, 500);
}

// Update Cart Count
function updateCartCount() {
  fetch('/cart.json')
    .then(response => response.json())
    .then(data => {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = data.item_count;
      }
    })
    .catch(error => console.log('Error updating cart:', error));
}

// Open Search
function openSearch() {
  const searchModal = document.createElement('div');
  searchModal.className = 'search-modal';
  searchModal.innerHTML = `
    <div class="search-modal__content">
      <button class="search-modal__close">×</button>
      <form class="search-form" action="/search">
        <input 
          type="text" 
          name="q" 
          placeholder="Search products..."
          class="search-input"
          autofocus
        >
      </form>
    </div>
  `;
  
  document.body.appendChild(searchModal);
  
  searchModal.querySelector('.search-modal__close').addEventListener('click', () => {
    searchModal.remove();
  });
}

// Show Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Lazy Load Images
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Accessibility - Announce dynamic content
function announceToScreenReaders(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => announcement.remove(), 1000);
}

// Export functions for global use
window.Rootbound = {
  addToCart: handleAddToCart,
  updateCart: updateCartCount,
  showNotification: showNotification,
  announceToScreenReaders: announceToScreenReaders
};
