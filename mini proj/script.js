// Sample product data with gaming-themed products
const products = [
    {
        id: 1,
        name: "NVIDIA RTX 4090 - Cyber Edition",
        price: 1599.99,
        image: "https://images.unsplash.com/photo-1512314889847-5043eb995a6b",
        description: "The ultimate gaming GPU with RTX technology and cyberpunk design",
        category: "Gaming",
        features: [
            "Ray Tracing",
            "DLSS 3.0",
            "16GB GDDR6X",
            "4K Gaming"
        ]
    },
    {
        id: 2,
        name: "AMD Radeon RX 7900 XTX - Battle Edition",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1512314889847-5043eb995a6b",
        description: "Powerful gaming performance with RDNA 3 architecture and battle-ready design",
        category: "Gaming",
        features: [
            "RDNA 3 Architecture",
            "24GB GDDR6",
            "Infinity Cache",
            "FSR 3.0"
        ]
    },
    {
        id: 3,
        name: "Gaming Rig Starter Kit",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1512314889847-5043eb995a6b",
        description: "Complete gaming setup with RGB lighting and gaming peripherals",
        category: "Bundle",
        features: [
            "RGB Keyboard",
            "Gaming Mouse",
            "Headset",
            "RGB Case"
        ]
    }
];

// Cart functionality
let cart = [];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const cartCount = document.querySelector('.cart-count');

// Load products with gaming animations
function loadProducts() {
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-hover">
                    <ul class="product-features">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
        
        // Animate product cards
        gsap.from(productCard, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power2.out'
        });
        
        // Add hover animation
        productCard.addEventListener('mouseenter', () => {
            gsap.to(productCard.querySelector('.product-hover'), {
                opacity: 1,
                y: 0,
                duration: 0.3
            });
        });
        
        productCard.addEventListener('mouseleave', () => {
            gsap.to(productCard.querySelector('.product-hover'), {
                opacity: 0,
                y: 50,
                duration: 0.3
            });
        });
    });
}

// Add to cart with gaming animation
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        
        // Create a glowing particle effect
        const particles = document.createElement('div');
        particles.className = 'cart-particles';
        particles.style.left = event.clientX + 'px';
        particles.style.top = event.clientY + 'px';
        document.body.appendChild(particles);
        
        // Animate particles
        gsap.to(particles, {
            x: document.querySelector('.cart-icon').getBoundingClientRect().left,
            y: document.querySelector('.cart-icon').getBoundingClientRect().top,
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => particles.remove()
        });
        
        // Show notification with animation
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = `${product.name} added to cart!`;
        document.body.appendChild(notification);
        
        gsap.fromTo(notification, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => {
                gsap.to(notification, {
                    y: 50,
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => notification.remove()
                });
            }
        });
    }
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', () => {
    loadProducts();
    updateCartCount();
});

// Navbar scroll effect with gaming animation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        gsap.to(navbar, {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            duration: 0.3,
            ease: 'power2.inOut'
        });
    } else {
        gsap.to(navbar, {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            duration: 0.3,
            ease: 'power2.inOut'
        });
    }
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add floating particles effect
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'floating-particles';
    document.body.appendChild(particles);
    
    // Add multiple particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particles.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add interactive category hover effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
