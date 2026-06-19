/**
 * Standalone Client-Side Application Controller Architecture
 */

// Embedded Local Store Object - replaces backend queries
const productCatalogDatabase = [
    {
        id: 1,
        title: "Sony WH-1000XM4 Wireless Premium Noise Cancelling Overhead Headphones",
        price: 348.00,
        rating: 4.8,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Apple Watch Series 8 Smartwatch with Midnight Aluminum Case & Sport Band",
        price: 399.00,
        rating: 4.7,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Logitech G Pro Mechanical Gaming Keyboard with Backlit RGB Clicky Keys",
        price: 129.99,
        rating: 4.4,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "SAMSUNG Odyssey 34-Inch Ultra-Wide Curved Gaming Monitor 165Hz Refresh Rate",
        price: 549.99,
        rating: 4.6,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Classic Premium Top-Grain Leather Heritage Men's Fitted Jacket",
        price: 189.50,
        rating: 4.3,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        title: "Minimalist Ergonomic Stainless Steel Electric Pour-Over Coffee Kettle",
        price: 89.00,
        rating: 4.9,
        category: "home",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 7,
        title: "Luxury Egyptian Cotton Complete Queen Sheets Set - 4 Pieces",
        price: 64.99,
        rating: 4.5,
        category: "home",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 8,
        title: "Vintage Casual Canvas Travel Backpack with Weatherproof Coating",
        price: 45.00,
        rating: 4.2,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80"
    }
];

// Application Core Runtime Central State 
let appState = {
    products: productCatalogDatabase,
    cart: JSON.parse(localStorage.getItem('amazon_clone_standalone_cart')) || [],
    currentFilter: 'all',
    searchQuery: '',
    sortBy: 'featured'
};

// Target DOM Elements Node Registry
const DOM = {
    productsGrid: document.getElementById('dynamic-products-render'),
    globalCartCount: document.getElementById('global-cart-count'),
    cartIconTrigger: document.getElementById('cart-icon-trigger'),
    cartDrawer: document.getElementById('cart-drawer'),
    drawerOverlay: document.getElementById('drawer-overlay'),
    closeDrawerBtn: document.getElementById('close-drawer-btn'),
    drawerItemsList: document.getElementById('drawer-items-list'),
    drawerItemsCount: document.getElementById('drawer-items-count'),
    drawerTotalCash: document.getElementById('drawer-total-cash'),
    mainSearch: document.getElementById('main-search'),
    searchBtn: document.getElementById('search-btn'),
    categorySelect: document.getElementById('category-select'),
    sortSelect: document.getElementById('sort-select'),
    resultsCountText: document.getElementById('results-count-text'),
    navFilters: document.querySelectorAll('.nav-bottom-bar li'),
    toastContainer: document.getElementById('toast-container')
};

/**
 * App Bootstrapping Entry Hook Execution
 */
document.addEventListener('DOMContentLoaded', () => {
    setupEventPipelines();
    processStateEngine();
    syncCartStateWithUI();
});

/**
 * Connect Interactions and Dynamic Filter Tracking
 */
function setupEventPipelines() {
    DOM.cartIconTrigger.addEventListener('click', () => toggleDrawerState(true));
    DOM.closeDrawerBtn.addEventListener('click', () => toggleDrawerState(false));
    DOM.drawerOverlay.addEventListener('click', () => toggleDrawerState(false));

    // Department Header List Filters
    DOM.navFilters.forEach(item => {
        item.addEventListener('click', (e) => {
            const filterValue = e.currentTarget.getAttribute('data-filter');
            if(!filterValue) return; // Ignore elements missing standard routing hooks
            
            DOM.navFilters.forEach(el => el.classList.remove('active-nav-filter'));
            e.currentTarget.classList.add('active-nav-filter');
            appState.currentFilter = filterValue;
            processStateEngine();
        });
    });

    // Pricing Layout Dropdowns
    DOM.sortSelect.addEventListener('change', (e) => {
        appState.sortBy = e.target.value;
        processStateEngine();
    });

    // Integrated Search Bars Interfacing Engines
    DOM.searchBtn.addEventListener('click', executeSearchQuery);
    DOM.mainSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') executeSearchQuery();
    });
}

function toggleDrawerState(openState) {
    if (openState) {
        DOM.drawerOverlay.classList.add('visible');
        DOM.cartDrawer.classList.add('open');
    } else {
        DOM.drawerOverlay.classList.remove('visible');
        DOM.cartDrawer.classList.remove('open');
    }
}

function executeSearchQuery() {
    appState.searchQuery = DOM.mainSearch.value.trim().toLowerCase();
    appState.currentFilter = DOM.categorySelect.value;
    
    DOM.navFilters.forEach(el => {
        if(el.getAttribute('data-filter') === appState.currentFilter) {
            el.classList.add('active-nav-filter');
        } else {
            el.classList.remove('active-nav-filter');
        }
    });

    processStateEngine();
}

/**
 * Filter Matrix and Computational Sort Pipeline Processor Engine
 */
function processStateEngine() {
    let outputList = [...appState.products];

    // Stage 1: Department Filter Routing Matching Check
    if (appState.currentFilter !== 'all') {
        outputList = outputList.filter(p => p.category === appState.currentFilter);
    }

    // Stage 2: Structural Fuzzy-Text Query Filtering Logic Mapping
    if (appState.searchQuery !== '') {
        outputList = outputList.filter(p => p.title.toLowerCase().includes(appState.searchQuery));
    }

    // Stage 3: Sorting Transformations Applied Real-time
    if (appState.sortBy === 'low-high') {
        outputList.sort((a, b) => a.price - b.price);
    } else if (appState.sortBy === 'high-low') {
        outputList.sort((a, b) => b.price - a.price);
    }

    DOM.resultsCountText.innerText = `Showing ${outputList.length} total matched results profiles`;
    renderDomMasterGrid(outputList);
}

/**
 * Product Showcase Blueprint Card Renderer Interface Matrix
 */
function renderDomMasterGrid(dataset) {
    DOM.productsGrid.innerHTML = '';
    
    if (dataset.length === 0) {
        DOM.productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 4px;">
                <h3>No inventory matches parameters.</h3>
                <p style="margin-top: 10px; color: #666;">Try adjusting search keywords or changing filter categories.</p>
            </div>`;
        return;
    }

    dataset.forEach(product => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('product-card');
        
        const wholePart = Math.floor(product.price);
        const fractionalPart = (product.price % 1).toFixed(2).substring(2);
        
        const starsFull = '★'.repeat(Math.floor(product.rating));
        const starsEmpty = '☆'.repeat(5 - Math.floor(product.rating));

        cardElement.innerHTML = `
            ${product.rating >= 4.7 ? `<span class="product-badge">Best Seller</span>` : ''}
            <div class="image-frame">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <h3 class="product-title" title="${product.title}">${product.title}</h3>
            <div class="rating-row">
                <span class="stars">${starsFull}${starsEmpty}</span>
                <span class="rating-count">${Math.floor(product.rating * 31)} ratings</span>
            </div>
            <div class="price-row">
                <span class="currency-symbol">$</span>
                <span class="price-whole">${wholePart}</span>
                <span class="price-fraction">${fractionalPart}</span>
            </div>
            <button class="amazon-yellow-btn">Add to Cart</button>
        `;

        // Direct Event Attachment Logic to safeguard isolated runtime parameters context
        cardElement.querySelector('.amazon-yellow-btn').addEventListener('click', () => {
            pushProductToCartDataState(product);
        });

        DOM.productsGrid.appendChild(cardElement);
    });
}

function pushProductToCartDataState(targetProduct) {
    const matchedRecord = appState.cart.find(record => record.id === targetProduct.id);
    
    if (matchedRecord) {
        matchedRecord.quantity += 1;
    } else {
        appState.cart.push({
            id: targetProduct.id,
            title: targetProduct.title,
            price: targetProduct.price,
            image: targetProduct.image,
            quantity: 1
        });
    }

    syncCartStateWithUI();
    triggerToastAlert(`Added "${targetProduct.title.substring(0, 22)}..." successfully.`);
}

/**
 * Interface Mutation Synchronization Engine
 */
function syncCartStateWithUI() {
    // Commit array mutations straight to local device state context registry mapping
    localStorage.setItem('amazon_clone_standalone_cart', JSON.stringify(appState.cart));

    DOM.drawerItemsList.innerHTML = '';
    let runningItemQuantityCounter = 0;
    let runningAggregateCashCalculator = 0;

    appState.cart.forEach(record => {
        runningItemQuantityCounter += record.quantity;
        runningAggregateCashCalculator += (record.price * record.quantity);

        const rowElement = document.createElement('div');
        rowElement.classList.add('drawer-item-card');
        rowElement.innerHTML = `
            <img src="${record.image}" alt="${record.title}">
            <div class="item-details">
                <h4>${record.title}</h4>
                <div class="item-qty-row">
                    <select class="qty-modifier-selector" data-item-id="${record.id}">
                        ${[1,2,3,4,5,6,7,8,9,10].map(n => `<option value="${n}" ${record.quantity === n ? 'selected' : ''}>Qty: ${n}</option>`).join('')}
                    </select>
                    <span class="delete-action-text" data-action-id="${record.id}">Delete</span>
                </div>
            </div>
            <div style="font-weight:700;">$${(record.price * record.quantity).toFixed(2)}</div>
        `;

        rowElement.querySelector('.qty-modifier-selector').addEventListener('change', (e) => {
            modifyItemQuantityPayload(parseInt(e.target.getAttribute('data-item-id')), parseInt(e.target.value));
        });

        rowElement.querySelector('.delete-action-text').addEventListener('click', (e) => {
            ejectItemRecordFromState(parseInt(e.target.getAttribute('data-action-id')));
        });

        DOM.drawerItemsList.appendChild(rowElement);
    });

    DOM.globalCartCount.innerText = runningItemQuantityCounter;
    DOM.drawerItemsCount.innerText = runningItemQuantityCounter;
    DOM.drawerTotalCash.innerText = runningAggregateCashCalculator.toFixed(2);
}

function modifyItemQuantityPayload(id, newQty) {
    const targetItem = appState.cart.find(record => record.id === id);
    if(targetItem) {
        targetItem.quantity = newQty;
        syncCartStateWithUI();
    }
}

function ejectItemRecordFromState(id) {
    appState.cart = appState.cart.filter(record => record.id !== id);
    syncCartStateWithUI();
    triggerToastAlert("Item record removed from your active cart tracking.");
}

function triggerToastAlert(messageText) {
    const elementNode = document.createElement('div');
    elementNode.classList.add('toast');
    elementNode.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #2e7d32;"></i> <span>${messageText}</span>`;
    DOM.toastContainer.appendChild(elementNode);
    
    setTimeout(() => {
        elementNode.style.animation = 'slideIn 0.3s ease reverse forwards';
        setTimeout(() => elementNode.remove(), 300);
    }, 2800);
}