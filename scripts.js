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

// Get the "Hire Me" button (ensure this exists in your HTML)
const hireMeBtn = document.getElementById('hireMeBtn');

// Create the popup container
const hireMePopup = document.createElement('div');
hireMePopup.id = 'hireMePopup';
hireMePopup.classList.add('popup');

// Create the popup content
const popupContent = document.createElement('div');
popupContent.classList.add('popup-content');

// Title for the popup
const popupTitle = document.createElement('h3');
popupTitle.textContent = 'Hire me via';
popupContent.appendChild(popupTitle);

// Create the list of options (WhatsApp, LinkedIn, Email)
const optionsList = document.createElement('ul');
const whatsappOption = document.createElement('li');
const linkedinOption = document.createElement('li');
const emailOption = document.createElement('li');

// WhatsApp link with icon (green)
const whatsappLink = document.createElement('a');
whatsappLink.href = 'https://wa.me/+263713305700';
whatsappLink.target = '_blank';
whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp';
whatsappLink.classList.add('whatsapp');

// LinkedIn link with icon (blue)
const linkedinLink = document.createElement('a');
linkedinLink.href = 'https://www.linkedin.com/in/euclide-mtisi-929123317';
linkedinLink.target = '_blank';
linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i> LinkedIn';
linkedinLink.classList.add('linkedin');

// Email link with icon (blue)
const emailLink = document.createElement('a');
emailLink.href = 'mailto:euclidemtisi@gmail.com';
emailLink.target = '_blank';
emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email';
emailLink.classList.add('email');

// Append options to the list
whatsappOption.appendChild(whatsappLink);
linkedinOption.appendChild(linkedinLink);
emailOption.appendChild(emailLink);

optionsList.appendChild(whatsappOption);
optionsList.appendChild(linkedinOption);
optionsList.appendChild(emailOption);

popupContent.appendChild(optionsList);
hireMePopup.appendChild(popupContent);
document.body.appendChild(hireMePopup);

// Styles for the popup
const style = document.createElement('style');
style.textContent = `
  .popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .popup.show {
    display: flex;
    opacity: 1;
  }

  .popup-content {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    width: 80%;
    max-width: 400px;
    text-align: center;
  }

  .popup h3 {
    color: #333;
    margin-bottom: 20px;
    font-size: 24px;
  }

  .popup ul {
    list-style: none;
    padding: 0;
  }

  .popup ul li {
    margin: 15px 0;
  }

  .popup ul li a {
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 6px;
    color: white;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .popup ul li a:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .popup ul li a i {
    margin-right: 10px;
    font-size: 22px;
  }

  .whatsapp { background-color: #25D366; }
  .linkedin { background-color: #0077B5; }
  .email { background-color: #007BFF; }
`;

document.head.appendChild(style);

// Show popup when button is clicked
if (hireMeBtn) {
  hireMeBtn.addEventListener('click', () => {
    hireMePopup.classList.add('show');
  });
}

// Close popup when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === hireMePopup) {
    hireMePopup.classList.remove('show');
  }
});