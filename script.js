// Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        
        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('active', window.scrollY > 300);
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Menu Tab Filter
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                tabBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                
                // Filter menu items
                menuItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
        
        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);


        
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const cartItemsList = document.getElementById('cart-items');
const paymentForm = document.getElementById('payment-form');

let count = 0;
let cartItems = [];

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get product info
        const productCard = btn.closest('.menu-item'); // or your product class
        const productName = productCard.querySelector('.product-name')?.textContent || 'Unnamed Product';
        const productPrice = productCard.querySelector('.product-price')?.textContent || 'Price N/A';

        // Add to cart array
        cartItems.push({ name: productName, price: productPrice });

        // Update cart count
        count++;
        cartCount.textContent = count;

        // Update cart UI
        renderCartItems();

        // Animation feedback
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-plus"></i>';
        }, 1000);
    });
});

function renderCartItems() {
    cartItemsList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItemsList.appendChild(li);
    });

    // Optional: show cart section if hidden
    document.getElementById('cart-section').style.display = 'block';
}

        
        // Form Submission
        const bookingForm = document.getElementById('booking-form');
        const newsletterForm = document.querySelector('.newsletter-form');
        
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your reservation! We will contact you shortly to confirm.');
            bookingForm.reset();
        });
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animation on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const windowHeight = window.innerHeight;
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize sections with animation properties
        document.querySelectorAll('section').forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        });
        

        // Trigger initial animations
        window.dispatchEvent(new Event('scroll'));






        // Checkout system
const checkoutForm = document.getElementById('checkout-form');
const paymentMethod = document.getElementById('payment-method');
const paymentInstructions = document.getElementById('payment-instructions');

// Show instructions based on payment method
paymentMethod.addEventListener('change', () => {
    const method = paymentMethod.value;

    switch (method) {
        case 'bkash':
            paymentInstructions.style.display = 'block';
            paymentInstructions.innerHTML = `
                <strong>Bkash Payment:</strong> Send money to <b>017XXXXXXXX</b> and enter your transaction ID below.
                <input type="text" placeholder="Bkash TXN ID" required>
            `;
            break;
        case 'nagad':
            paymentInstructions.style.display = 'block';
            paymentInstructions.innerHTML = `
                <strong>Nagad Payment:</strong> Send money to <b>018XXXXXXXX</b> and enter your transaction ID below.
                <input type="text" placeholder="Nagad TXN ID" required>
            `;
            break;
        case 'card':
            paymentInstructions.style.display = 'block';
            paymentInstructions.innerHTML = `
                <strong>Card Payment:</strong> Enter your card details.
                <input type="text" placeholder="Card Number" required>
                <input type="text" placeholder="Expiry (MM/YY)" required>
                <input type="text" placeholder="CVV" required>
            `;
            break;
        case 'cod':
            paymentInstructions.style.display = 'none';
            paymentInstructions.innerHTML = '';
            break;
        default:
            paymentInstructions.style.display = 'none';
            paymentInstructions.innerHTML = '';
    }
});

// Handle form submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will process it shortly.');
    checkoutForm.reset();
    paymentInstructions.style.display = 'none';
});



checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = "success.html"; // Create this page
});
