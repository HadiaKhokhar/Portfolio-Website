document.addEventListener('DOMContentLoaded', () => {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var pageLinks = document.getElementById('page-links');
  
    hamburgerMenu.addEventListener('click', () => {
      pageLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  });
  