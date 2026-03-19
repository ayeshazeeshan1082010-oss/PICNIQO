// games carousel

$(document).ready(function () {
    $("#gamesCarousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            768: {
                items: 2,
                margin: 15,
            },
            992: {
                items: 3,
                margin: 20,
            },
        },
    });
});


// client testimonials

$(document).ready(function () {
  $("#testimonialsCarousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3,
        margin: 30,
      },
    },
  });
});

    //  Booking JavaScript 
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('bookingDate').min = today;
            
            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 3);
            document.getElementById('bookingDate').max = maxDate.toISOString().split('T')[0];
        });

        document.querySelector('.book-btn').addEventListener('click', function() {
            const date = document.getElementById('bookingDate').value;
            const people = document.getElementById('peopleCount').value;
            
            if (!date || !people) {
                alert('Please select date and group size');
                return;
            }
            
            alert(`Booking confirmed!\nDate: ${date}\nGroup: ${people}\nWe'll contact you soon!`);
        });



































// ===== LOGIN POPUP FUNCTIONS =====

// Open Login Popup
function openLoginPopup() {
    document.getElementById('loginPopup').classList.add('show');
    document.body.style.overflow = 'hidden'; // Background scroll band karo
}

// Close Login Popup
function closeLoginPopup() {
    document.getElementById('loginPopup').classList.remove('show');
    document.body.style.overflow = 'auto'; // Background scroll wapas enable
}

// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById('loginPassword');
    const icon = event.currentTarget;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Handle Login Form Submit
function handleLogin(event) {
    event.preventDefault(); // Page reload hone se roko
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberMe').checked;
    
    // Yahan aap apna login logic laga sakte ho
    alert(`Login Successful!\nEmail: ${email}`);
    
    // Popup band karo (optional)
    // closeLoginPopup();
    
    return false;
}

// Click outside popup to close
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('loginPopup');
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLoginPopup();
            }
        });
    }
});

// ESC key press to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLoginPopup();
    }
});



















// ===== REGISTER POPUP FUNCTIONS =====

// Open Register Popup
function openRegisterPopup() {
    document.getElementById('registerPopup').classList.add('show');
    document.body.style.overflow = 'hidden'; // Background scroll band karo
}

// Close Register Popup
function closeRegisterPopup() {
    document.getElementById('registerPopup').classList.remove('show');
    document.body.style.overflow = 'auto'; // Background scroll wapas enable
}

// Toggle Password Visibility
function togglePassword(inputId, element) {
    const passwordInput = document.getElementById(inputId);
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        element.classList.remove('fa-eye');
        element.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        element.classList.remove('fa-eye-slash');
        element.classList.add('fa-eye');
    }
}

// Handle Register Form Submit
function handleRegister(event) {
    event.preventDefault(); // Page reload hone se roko
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Password match check
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    // Terms check
    if (!terms) {
        alert('Please agree to Terms and Privacy Policy');
        return false;
    }
    
    // Yahan aap apna registration logic laga sakte ho
    alert(`Registration Successful!\nName: ${firstName} ${lastName}\nEmail: ${email}`);
    
    // Popup band karo (optional)
    // closeRegisterPopup();
    
    return false;
}

// Click outside popup to close
document.addEventListener('DOMContentLoaded', function() {
    const registerPopup = document.getElementById('registerPopup');
    if (registerPopup) {
        registerPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeRegisterPopup();
            }
        });
    }
});

// ESC key press to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRegisterPopup();
        // Agar login popup bhi open hai to usko bhi band karo
        if (typeof closeLoginPopup === 'function') {
            closeLoginPopup();
        }
    }
});











    // contact 

        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                const icon = item.querySelector('i');
                
                if (answer.style.display === 'none' || !answer.style.display) {
                    answer.style.display = 'block';
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    answer.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });


//  FAQ Toggle JavaScript 

        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('i');
            
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            } else {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const answers = document.querySelectorAll('.faq-answer');
            answers.forEach(answer => {
                answer.style.display = 'none';
            });
        });








//   Gallery Filter JavaScript


    
        let currentFilter = 'all';
        let activeButton = document.querySelector('.filter-btn.active');

        function filterGallery(category, element) {
            // Update active button
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            element.classList.add('active');
            activeButton = element;
            
            currentFilter = category;
            
            // Get all gallery items
            const items = document.querySelectorAll('.gallery-item-col');
            let visibleCount = 0;
            
            // Show/hide items based on category
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    visibleCount++;
                    
                    // Add animation
                    item.style.animation = 'none';
                    item.offsetHeight; // Trigger reflow
                    item.style.animation = 'fadeInScale 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide no results message
            const noResults = document.getElementById('noResults');
            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }

        // Initialize - show all items
        document.addEventListener('DOMContentLoaded', function() {
            filterGallery('all', document.querySelector('.filter-btn.active'));
        });