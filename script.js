const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactBtn = document.querySelector('.contact-btn');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  contactBtn.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    const serviceSection = document.getElementById('services');
    const serviceLink = document.querySelector('a[href="#services"]');
    
    const scrollPos = window.scrollY + window.innerHeight / 2;
  
    if (scrollPos >= serviceSection.offsetTop && scrollPos < serviceSection.offsetTop + serviceSection.offsetHeight) {
      serviceLink.classList.add('active');
    } else {
      serviceLink.classList.remove('active');
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Select all sections and nav links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Function to handle active class toggle based on scroll position
    function setActiveLink() {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // Optional offset for earlier detection
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the section is in the viewport
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Loop through nav links to add/remove 'active' class
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }

    // Listen for the scroll event
    window.addEventListener("scroll", setActiveLink);

    // Call the function initially to set the active link on page load
    setActiveLink();
});



