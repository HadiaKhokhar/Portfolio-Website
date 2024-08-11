
document.addEventListener('DOMContentLoaded', () => {
  // For Menu Button
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var pageLinks = document.getElementById('page-links');

  
    hamburgerMenu.addEventListener('click', () => {
      pageLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  // For hide and show card
  var allBtn = document.getElementById('all-button');
  var uiBtn = document.getElementById('ui-button');
  var uxBtn = document.getElementById('ux-button');
  var webDesignBtn = document.getElementById('web-design-button');
  var uxCard = document.getElementById('ux-card');
  var uiCard = document.getElementById('ui-card');
  var webDesigncard = document.getElementById('web-design-card');
  var buttonlist = [allBtn, uiBtn, uxBtn, webDesignBtn];

  // Function to reset all button backgrounds
  function resetButtonBackgrounds() {
      buttonlist.forEach(function(button) {
          button.style.backgroundColor = 'rgb(57, 62, 70)';  // Reset to default color
      });  // Corrected placement of the closing brace
  }
   // For active button
  function activBtnbackground(activeBtn){
    activeBtn.style.backgroundColor = 'rgb(0, 173, 181)'
  } 


  allBtn.addEventListener('click', function() {
    resetButtonBackgrounds()
    uiCard.style.display= '';
    uxCard.style.display = '';
    webDesigncard.style.display = '';
    activBtnbackground(allBtn)
    });
  uiBtn.addEventListener('click', function() {
    resetButtonBackgrounds()
    uxCard.style.display = 'none';
    webDesigncard.style.display = 'none';
    uiCard.style.display= '';
    activBtnbackground(uiBtn)
    });
  uxBtn.addEventListener('click', function() {
    resetButtonBackgrounds()
    uiCard.style.display= 'none';
    webDesigncard.style.display = 'none';
    uxCard.style.display = '';
    activBtnbackground(uxBtn)
    });
  webDesignBtn.addEventListener('click', function() {
    resetButtonBackgrounds()
    uiCard.style.display= 'none';
    uxCard.style.display = 'none';
    webDesigncard.style.display = '';
    activBtnbackground(webDesignBtn)
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
