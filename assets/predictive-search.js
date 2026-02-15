class PredictiveSearch {
  constructor() {
    this.input = document.querySelector('.predictive-search__input');
    this.resultsContainer = document.querySelector('.predictive-search__results');
    this.debounceTimer = null;
    
    if (this.input) {
      this.input.addEventListener('input', this.handleSearch.bind(this));
      this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    }
  }

  handleSearch(e) {
    const query = e.target.value.trim();
    
    clearTimeout(this.debounceTimer);
    
    if (query.length < 2) {
      this.resultsContainer.classList.remove('active');
      return;
    }

    this.debounceTimer = setTimeout(() => {
      this.fetchResults(query);
    }, 300);
  }

  handleKeydown(e) {
    if (e.key === 'Escape') {
      this.resultsContainer.classList.remove('active');
    }
  }

  fetchResults(query) {
    const loading = document.querySelector('.predictive-search__loading');
    if (loading) loading.classList.add('active');

    fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[options][unavailable_products]=last&limit=5`)
      .then(response => response.json())
      .then(data => this.renderResults(data))
      .catch(error => console.log('Search error:', error))
      .finally(() => {
        if (loading) loading.classList.remove('active');
      });
  }

  renderResults(data) {
    const html = data.products.map(product => `
      <div class="predictive-search__result-item">
        <a href="${product.url}">
          ${product.image ? `<img src="${product.image.url}" alt="${product.title}" class="predictive-search__result-item-image">` : ''}
          <span class="predictive-search__result-item-title">${product.title}</span>
          <span class="predictive-search__result-item-price">${Shopify.formatMoney(product.price)}</span>
        </a>
      </div>
    `).join('');

    this.resultsContainer.innerHTML = html || '<div class="predictive-search__result-item">No results found</div>';
    this.resultsContainer.classList.add('active');
  }
}

// Initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PredictiveSearch();
  });
} else {
  new PredictiveSearch();
}
