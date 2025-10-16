
function navigateTo(page) {
    window.location.href = page;
}
function showForm(formType) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.auth-tab:nth-child(${formType === 'login' ? 1 : 2})`).classList.add('active');

    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(`${formType}-form`).classList.add('active');

    // Update header text
    const header = document.querySelector('.auth-header h1');
    const subheader = document.querySelector('.auth-header p');
    
    if (formType === 'login') {
        header.textContent = 'Welcome Back';
        subheader.textContent = 'Sign in to continue your AI journey';
    } else {
        header.textContent = 'Join Clash AI';
        subheader.textContent = 'Create your account to get started';
    }
}

function initMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
    
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (navbar && navLinks) {
        navbar.appendChild(mobileMenuBtn);
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 600 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    initMobileMenu();
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here!');
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Signup functionality would be implemented here!');
        });
    }
    
    const tryBtn = document.querySelector('.try-btn');
    if (tryBtn) {
        tryBtn.addEventListener('click', function() {
            navigateTo('login.html');
        });
    }

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px'; 
        });
    });
});