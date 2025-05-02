const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.onclick=() => {
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
}

// Initialize EmailJS with your User ID
emailjs.init('kf9R1lst7Uofy_OUJ');

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Store the form element in a variable
    const form = e.target;
    
    // Send email
    emailjs.send('service_5pngxel', 'template_hq1pkh6', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('number').value,
        message: document.getElementById('message').value
    })
    .then(() => {
        alert('Email sent successfully!');
        form.reset(); // Clear all input fields after successful submission
    })
    .catch(() => {
        alert('Failed to send email.');
    });
});
