// Car Data
const cars = [
    {
        name: "Toyota Fortuner",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-28.png?isig=0&q=80",
        details: "7 Seats • Automatic • Diesel",
        pricePerDay: 6500
    },
    {
        name: "Maruti Swift",
        image: "https://images.unsplash.com/photo-1663852408695-f57f4d75a536?w=600",
        details: "5 Seats • Manual • Petrol",
        pricePerDay: 1500
    },
    {
        name: "Hyundai Creta",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80",
        details: "5 Seats • Automatic • Diesel",
        pricePerDay: 5000
    },
    {
        name: "Toyota Innova",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-74.png?isig=0&q=80",
        details: "7 Seats • Manual • Diesel",
        pricePerDay: 3000
    },
    {
        name: "Honda City",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-2.png?isig=0&q=80",
        details: "5 Seats • Automatic • Petrol",
        pricePerDay: 2000
    },
    {
        name: "Mahindra XUV700",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-2.png?isig=0&q=80",
        details: "7 Seats • Automatic • Petrol",
        pricePerDay: 5500
    },
    {
        name: "Tata Nexon",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-79.png?isig=0&q=80",
        details: "5 Seats • Manual • Petrol",
        pricePerDay: 2200
    },
    {
        name: "Hyundai Verna",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-103.png?isig=0&q=80",
        details: "5 Seats • Automatic • Petrol",
        pricePerDay: 2500
    },
    {
        name: "Skoda Slavia",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-10.png?isig=0&q=80",
        details: "5 Seats • Manual • Petrol",
        pricePerDay: 2800
    },
    {
        name: "Volkswagen Taigun",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144689/taigun-exterior-right-front-three-quarter-8.png?isig=0&q=80",
        details: "5 Seats • Automatic • Diesel",
        pricePerDay: 3000
    },
    {
        name: "Kia Sonet",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-12.png?isig=0&q=80",
        details: "5 Seats • Automatic • Petrol",
        pricePerDay: 2300
    },
    {
        name: "Renault Triber",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-exterior-right-front-three-quarter-26.png?isig=0&q=80",
        details: "7 Seats • Manual • Petrol",
        pricePerDay: 1800
    },
    {
        name: "Maruti Dzire",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80",
        details: "5 Seats • Manual • Petrol",
        pricePerDay: 1700
    },
    {
        name: "Honda Amaze",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-exterior-right-front-three-quarter-5.png?isig=0&q=80",
        details: "5 Seats • Automatic • Petrol",
        pricePerDay: 1900
    },
    {
        name: "Mahindra Thar",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80",
        details: "4 Seats • Manual • Diesel",
        pricePerDay: 4000
    },
    {
        name: "Toyota Urban Cruiser Hyryder",
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-74.png?isig=0&q=80",
        details: "5 Seats • Automatic • Petrol/Hybrid",
        pricePerDay: 3200
    }
];

// Reviews Data
const reviews = [
    {
        text: "Amazing service! The car was in perfect condition and the booking process was seamless.",
        author: "Rajesh Kumar",
        rating: 5
    },
    {
        text: "Great experience from start to finish. The staff was friendly and professional.",
        author: "Priya Sharma",
        rating: 5
    },
    {
        text: "Excellent value for money. Had a wonderful road trip thanks to Pankaj Car Rental.",
        author: "Amit Patel",
        rating: 5
    }
];

// Coupon codes
const coupons = {
    'WEEKEND20': 20,
    'AUTO-APPLY': 15,
    'PANKAJ': 50
};

// Google Sheets Configuration
const SHEETS_CONFIG = {
    USERS_URL: 'https://script.google.com/macros/s/AKfycbzGsz4G3PiWOGqgjVv5YIZxl04rLVY7q2LoJU9uBDvu8jWiPIU9pHciCTbpY7ZSIu5K/exec',
    BOOKINGS_URL: 'https://script.google.com/macros/s/AKfycbzGsz4G3PiWOGqgjVv5YIZxl04rLVY7q2LoJU9uBDvu8jWiPIU9pHciCTbpY7ZSIu5K/exec'
};

// Users database (in-memory)
let users = [
    {
        name: "Admin",
        email: "admin@pankaj.com",
        password: "admin123",
        phone: "9999999999",
        dob: "1990-01-01",
        isAdmin: true,
        registrationDate: new Date().toISOString(),
        profilePic: "https://via.placeholder.com/120"
    }
];

// Bookings database (in-memory)
let bookings = [];

// Current user
let currentUser = null;
let selectedCarName = '';
let selectedCarPrice = 0;
let hasShownLoginModal = false;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderCars();
    renderReviews();
    setInterval(rotateReviews, 4000);

    // Load data from Google Sheets
    loadUsersFromSheets();
    loadBookingsFromSheets();

    // Set minimum dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickupDate').setAttribute('min', today);
    document.getElementById('dropoffDate').setAttribute('min', today);

    // Copy code buttons
    document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', function () {
            const code = this.getAttribute('data-copy');
            navigator.clipboard.writeText(code);
            this.textContent = 'Copied!';
            setTimeout(() => this.textContent = 'Copy Code', 1500);
        });
    });

    // Profile picture upload
    document.getElementById('profilePicUpload').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgUrl = event.target.result;
                document.getElementById('profilePicLarge').src = imgUrl;
                document.getElementById('userAvatar').src = imgUrl;
                if (currentUser) {
                    currentUser.profilePic = imgUrl;
                    updateUserInSheets(currentUser);
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Date change listeners
    document.getElementById('pickupDate').addEventListener('change', calculateFare);
    document.getElementById('dropoffDate').addEventListener('change', calculateFare);
    document.getElementById('couponCode').addEventListener('blur', calculateFare);

    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Booking form
    document.getElementById('bookingForm').addEventListener('submit', handleBooking);

    // Show login after scroll
    let scrollTriggerExecuted = false;
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 400 && !scrollTriggerExecuted && !currentUser && !hasShownLoginModal) {
            scrollTriggerExecuted = true;
            setTimeout(() => {
                showLoginModal();
            }, 500);
        }
    });
});

// ==================== GOOGLE SHEETS FUNCTIONS ====================

async function loadUsersFromSheets() {
    try {
        const response = await fetch(`${SHEETS_CONFIG.USERS_URL}?action=getAllUsers`);
        const result = await response.json();
        if (result.success && result.users) {
            users = [...users, ...result.users];
        }
    } catch (error) {
        console.log('Using local users data');
    }
}

async function loadBookingsFromSheets() {
    try {
        const response = await fetch(`${SHEETS_CONFIG.BOOKINGS_URL}?action=getAllBookings`);
        const result = await response.json();
        if (result.success && result.bookings) {
            bookings = result.bookings;
        }
    } catch (error) {
        console.log('Using local bookings data');
    }
}

async function updateUserInSheets(user) {
    try {
        await fetch(SHEETS_CONFIG.USERS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'updateUser',
                user: user
            })
        });
    } catch (error) {
        console.error('Failed to update user in sheets:', error);
    }
}

// ==================== LOGIN/SIGNUP FUNCTIONS ====================

function showLoginModal() {
    if (!hasShownLoginModal) {
        document.getElementById('loginModal').classList.add('show');
        hasShownLoginModal = true;
    }
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
}

function showSignup() {
    const container = document.getElementById('loginFormContainer');
    container.innerHTML = `
        <h2>Create Account</h2>
        <form id="signupForm">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" id="signupName" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="signupEmail" required>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" id="signupPhone" pattern="[0-9]{10}" required>
            </div>
            <div class="form-group">
                <label>Date of Birth</label>
                <input type="date" id="signupDOB" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="signupPassword" minlength="6" required>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" id="signupConfirm" required>
            </div>
            <button type="submit" class="submit-button">Create Account</button>
            <p style="text-align: center; margin-top: 1rem;">
                Already have an account? <a href="#" onclick="showLogin()">Login</a>
            </p>
        </form>
    `;

    document.getElementById('signupForm').addEventListener('submit', handleSignup);
}

function showLogin() {
    const container = document.getElementById('loginFormContainer');
    container.innerHTML = `
        <h2>Welcome Back!</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="loginEmail">Email Address</label>
                <input type="email" id="loginEmail" required>
            </div>
            <div class="form-group">
                <label for="loginPassword">Password</label>
                <input type="password" id="loginPassword" required>
            </div>
            <button type="submit" class="submit-button">Login</button>
            <div class="error-message" id="loginError"></div>
            <p style="text-align: center; margin-top: 1rem;">
                Don't have an account? <a href="#" onclick="showSignup()">Sign Up</a>
            </p>
        </form>
    `;

    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const submitBtn = e.target.querySelector('.submit-button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';

    try {
        // Try Google Sheets login
        const response = await fetch(`${SHEETS_CONFIG.USERS_URL}?action=login&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        const result = await response.json();

        if (result.success) {
            currentUser = result.user;
            document.getElementById('userMenuContainer').classList.remove('hidden');
            document.getElementById('userAvatar').src = currentUser.profilePic || 'https://via.placeholder.com/40';
            closeLoginModal();

            if (currentUser.isAdmin) {
                showDashboard();
            } else {
                alert(`Welcome back, ${currentUser.name}!`);
            }
        } else {
            // Fallback to local login
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                currentUser = user;
                document.getElementById('userMenuContainer').classList.remove('hidden');
                document.getElementById('userAvatar').src = user.profilePic || 'https://via.placeholder.com/40';
                closeLoginModal();

                if (user.isAdmin) {
                    showDashboard();
                } else {
                    alert(`Welcome back, ${user.name}!`);
                }
            } else {
                document.getElementById('loginError').textContent = 'Invalid email or password';
                document.getElementById('loginError').classList.add('show');
            }
        }
    } catch (error) {
        // Fallback to local login
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            currentUser = user;
            document.getElementById('userMenuContainer').classList.remove('hidden');
            document.getElementById('userAvatar').src = user.profilePic || 'https://via.placeholder.com/40';
            closeLoginModal();

            if (user.isAdmin) {
                showDashboard();
            } else {
                alert(`Welcome back, ${user.name}!`);
            }
        } else {
            document.getElementById('loginError').textContent = 'Invalid email or password';
            document.getElementById('loginError').classList.add('show');
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }

    const email = document.getElementById('signupEmail').value.trim();
    if (users.find(u => u.email === email)) {
        alert('Email already registered!');
        return;
    }

    const newUser = {
        name: document.getElementById('signupName').value.trim(),
        email: email,
        phone: document.getElementById('signupPhone').value.trim(),
        dob: document.getElementById('signupDOB').value,
        password: password,
        isAdmin: false,
        registrationDate: new Date().toISOString(),
        profilePic: 'https://via.placeholder.com/120'
    };

    const submitBtn = e.target.querySelector('.submit-button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating Account...';

    try {
        // Save to Google Sheets
        await fetch(SHEETS_CONFIG.USERS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'signup',
                ...newUser
            })
        });

        // Also save locally
        users.push(newUser);

        alert('Account created successfully! Please login.');
        showLogin();
    } catch (error) {
        // Save locally if sheets fails
        users.push(newUser);
        alert('Account created successfully! Please login.');
        showLogin();
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create Account';
    }
}

// ==================== NAVIGATION FUNCTIONS ====================

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function toggleUserDropdown() {
    document.getElementById('userDropdown').classList.toggle('show');
}

function showHome() {
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('dashboardContainer').classList.remove('show');
    document.getElementById('adminPanel').classList.remove('show');
}

function showDashboard() {
    if (!currentUser) return;

    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('show');

    if (currentUser.isAdmin) {
        document.getElementById('dashboardContainer').classList.remove('show');
        document.getElementById('adminPanel').classList.add('show');
        loadAdminData();
    } else {
        document.getElementById('dashboardContainer').classList.add('show');
        loadUserDashboard();
    }

    document.getElementById('userDropdown').classList.remove('show');
}

function logout() {
    currentUser = null;
    document.getElementById('userMenuContainer').classList.add('hidden');
    showHome();
    document.getElementById('userDropdown').classList.remove('show');
}

// ==================== RENDER FUNCTIONS ====================

function renderCars() {
    const carGrid = document.getElementById('carGrid');
    carGrid.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-info">
                <div class="car-name">${car.name}</div>
                <div class="car-details">${car.details}</div>
                <div class="car-price">₹${car.pricePerDay}/day</div>
                <button class="book-button" onclick="openBookingModal('${car.name}', ${car.pricePerDay})">Book Now</button>
            </div>
        `;
        carGrid.appendChild(carCard);
    });
}

let currentReviewIndex = 0;

function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = '';

    reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = `review-card ${index === 0 ? 'active' : ''}`;
        reviewCard.innerHTML = `
            <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
            <div class="review-text">"${review.text}"</div>
            <div class="review-author">- ${review.author}</div>
        `;
        container.appendChild(reviewCard);
    });
}

function rotateReviews() {
    const reviewCards = document.querySelectorAll('.review-card');
    if (reviewCards.length === 0) return;
    reviewCards[currentReviewIndex].classList.remove('active');
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    reviewCards[currentReviewIndex].classList.add('active');
}

// ==================== BOOKING MODAL FUNCTIONS ====================

function openBookingModal(carName, pricePerDay) {
    selectedCarName = carName;
    selectedCarPrice = pricePerDay;

    document.getElementById('modalCarName').textContent = carName;
    document.getElementById('modalCarPrice').textContent = `₹${pricePerDay} per day`;
    document.getElementById('bookingModal').classList.add('show');
    document.getElementById('bookingForm').reset();
    document.getElementById('totalFare').textContent = '₹0';
    document.getElementById('fareBreakdown').textContent = '';
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('show');
}

function calculateFare() {
    const pickupDate = document.getElementById('pickupDate').value;
    const dropoffDate = document.getElementById('dropoffDate').value;
    const couponCode = document.getElementById('couponCode').value.trim().toUpperCase();

    if (pickupDate && dropoffDate) {
        const pickup = new Date(pickupDate);
        const dropoff = new Date(dropoffDate);
        const diffDays = Math.ceil((dropoff - pickup) / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
            let totalFare = diffDays * selectedCarPrice;
            let discount = 0;

            if (couponCode && coupons[couponCode]) {
                discount = coupons[couponCode];
                totalFare = totalFare * (1 - discount / 100);
            }

            document.getElementById('totalFare').textContent = `₹${totalFare.toLocaleString('en-IN')}`;
            let breakdown = `${diffDays} day(s) × ₹${selectedCarPrice}`;
            if (discount > 0) {
                breakdown += ` - ${discount}% discount`;
            }
            document.getElementById('fareBreakdown').textContent = breakdown;
            return totalFare;
        }
    }
    return 0;
}

async function handleBooking(e) {
    e.preventDefault();

    const totalFare = calculateFare();
    if (totalFare === 0) {
        alert('Please select valid dates');
        return;
    }

    const booking = {
        id: 'BK' + Date.now(),
        carName: selectedCarName,
        customerName: document.getElementById('customerName').value.trim(),
        age: document.getElementById('customerAge').value,
        email: document.getElementById('customerEmail').value.trim(),
        phone: document.getElementById('customerPhone').value.trim(),
        pickupDate: document.getElementById('pickupDate').value,
        dropoffDate: document.getElementById('dropoffDate').value,
        pickupLocation: document.getElementById('pickupLocation').value.trim(),
        couponCode: document.getElementById('couponCode').value.trim().toUpperCase(),
        additionalNotes: document.getElementById('additionalNotes').value.trim(),
        totalFare: totalFare,
        pricePerDay: selectedCarPrice,
        bookingDate: new Date().toISOString(),
        userEmail: currentUser ? currentUser.email : 'Guest',
        status: 'Active'
    };

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    try {
        // Save to Google Sheets
        await fetch(SHEETS_CONFIG.BOOKINGS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'booking',
                ...booking
            })
        });

        // Also save locally
        bookings.push(booking);

        document.getElementById('bookingSuccess').classList.add('show');
        setTimeout(() => {
            closeBookingModal();
            document.getElementById('bookingSuccess').classList.remove('show');
            if (currentUser && !currentUser.isAdmin) {
                showDashboard();
            }
        }, 2000);
    } catch (error) {
        // Save locally if sheets fails
        bookings.push(booking);

        document.getElementById('bookingSuccess').classList.add('show');
        setTimeout(() => {
            closeBookingModal();
            document.getElementById('bookingSuccess').classList.remove('show');
            if (currentUser && !currentUser.isAdmin) {
                showDashboard();
            }
        }, 2000);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirm Booking';
    }
}

// ==================== USER DASHBOARD FUNCTIONS ====================

async function loadUserDashboard() {
    if (!currentUser) return;

    // Reload bookings from sheets
    await loadBookingsFromSheets();

    document.getElementById('dashboardUserName').textContent = currentUser.name;
    document.getElementById('dashboardUserEmail').textContent = currentUser.email;
    document.getElementById('profilePicLarge').src = currentUser.profilePic;

    const userBookings = bookings.filter(b => b.userEmail === currentUser.email);
    const activeBookings = userBookings.filter(b => new Date(b.dropoffDate) >= new Date());
    const totalSpent = userBookings.reduce((sum, b) => sum + b.totalFare, 0);

    document.getElementById('totalBookings').textContent = userBookings.length;
    document.getElementById('activeBookings').textContent = activeBookings.length;
    document.getElementById('totalSpent').textContent = `₹${totalSpent.toLocaleString('en-IN')}`;

    const bookingList = document.getElementById('userBookingList');
    if (userBookings.length === 0) {
        bookingList.innerHTML = '<p>No bookings yet. <a href="#" onclick="showHome()">Book your first car!</a></p>';
    } else {
        bookingList.innerHTML = userBookings.map(b => `
            <div class="booking-item">
                <h3>${b.carName}</h3>
                <p><strong>Booking ID:</strong> ${b.id}</p>
                <p><strong>Dates:</strong> ${b.pickupDate} to ${b.dropoffDate}</p>
                <p><strong>Location:</strong> ${b.pickupLocation}</p>
                <p><strong>Total:</strong> ₹${b.totalFare.toLocaleString('en-IN')}</p>
                <p><strong>Status:</strong> ${b.status}</p>
            </div>
        `).join('');
    }
}

// ==================== ADMIN PANEL FUNCTIONS ====================

function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('adminBookings').style.display = 'none';
    document.getElementById('adminCustomers').style.display = 'none';
    document.getElementById('adminStats').style.display = 'none';

    document.getElementById('admin' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
}

async function loadAdminData() {
    // Reload data from sheets
    await loadUsersFromSheets();
    await loadBookingsFromSheets();

    // Load bookings
    const bookingsTable = document.getElementById('adminBookingsTable');
    if (bookings.length === 0) {
        bookingsTable.innerHTML = '<tr><td colspan="7" style="text-align: center;">No bookings yet</td></tr>';
    } else {
        bookingsTable.innerHTML = bookings.map(b => `
            <tr>
                <td>${b.id}</td>
                <td>${b.customerName}</td>
                <td>${b.carName}</td>
                <td>${b.pickupDate}</td>
                <td>${b.dropoffDate}</td>
                <td>₹${b.totalFare.toLocaleString('en-IN')}</td>
                <td>${b.status}</td>
            </tr>
        `).join('');
    }

    // Load customers
    const customersTable = document.getElementById('adminCustomersTable');
    const nonAdminUsers = users.filter(u => !u.isAdmin);
    if (nonAdminUsers.length === 0) {
        customersTable.innerHTML = '<tr><td colspan="6" style="text-align: center;">No customers yet</td></tr>';
    } else {
        customersTable.innerHTML = nonAdminUsers.map(u => {
            const userBookings = bookings.filter(b => b.userEmail === u.email).length;
            return `
                <tr>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td>${u.phone}</td>
                    <td>${u.dob}</td>
                    <td>${new Date(u.registrationDate).toLocaleDateString()}</td>
                    <td>${userBookings}</td>
                </tr>
            `;
        }).join('');
    }

    // Load stats
    const totalRevenue = bookings.reduce((sum, b) => sum + b.totalFare, 0);
    document.getElementById('adminTotalBookings').textContent = bookings.length;
    document.getElementById('adminTotalCustomers').textContent = nonAdminUsers.length;
    document.getElementById('adminTotalRevenue').textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
}

// ==================== CLOSE MODALS ON OUTSIDE CLICK ====================

window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('loginModal')) {
        closeLoginModal();
    }
    if (e.target === document.getElementById('bookingModal')) {
        closeBookingModal();
    }
});