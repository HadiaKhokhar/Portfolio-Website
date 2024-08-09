// For Menu Button
document.addEventListener('DOMContentLoaded', () => {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var pageLinks = document.getElementById('page-links');
  
    hamburgerMenu.addEventListener('click', () => {
      pageLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  });
// For Read More and Read Less  
  function toggleText() {
    const text = document.getElementById('text');
    const readMore = document.getElementById('read-more');

    if (readMore.textContent === "Read More") {
        text.style.display = 'block';
        text.style.webkitLineClamp = 'unset';
        readMore.textContent = "Show Less";
    } else {
        text.style.display = '-webkit-box';
        text.style.webkitLineClamp = '5';
        readMore.textContent = "Read More";
    }
}
