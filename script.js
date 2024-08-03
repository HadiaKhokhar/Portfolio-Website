document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const pageLinks = document.getElementById('page-links');
  
    hamburgerMenu.addEventListener('click', () => {
      pageLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  });
  