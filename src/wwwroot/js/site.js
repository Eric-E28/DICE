window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            document.querySelectorAll('#mainNav .navbar-nav .nav-item .nav-link').forEach(item => {
                item.classList.remove('text-dark');
            });
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            document.querySelectorAll('#mainNav .navbar-nav .nav-item .nav-link').forEach(item => {
                item.classList.add('text-dark');
                item.classList.add('fw-bold'); // Add bold font weight when scrolled
            });
        }

    };

    window.addEventListener('scroll', function () {
        var logo = document.getElementById('logo');
        var scrollPosition = window.scrollY;

        // Change the logo image when scroll position passes a certain threshold
        if (scrollPosition > 0) { // Change 300 to the desired scroll position
            logo.src = 'assets/img/navbar-logo-3.png'; // Change to the path of the second logo image
            logo.style.height = '40px'; // Change to the desired width of the logo image
        } else {
            logo.src = 'assets/img/navbar-logo-3-white.png'; // Change to the path of the first logo image
        }
    });

    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                navbarShrink(); // Call navbarShrink when toggling navbar
            }
        });
    });
});

// Define the function to handle the click event on the navigation links
function handleNavLinkClick(event) {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Get the target section id from the href attribute
    const targetId = event.currentTarget.getAttribute('href').substring(1);

    // Scroll to the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Attach the event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});
