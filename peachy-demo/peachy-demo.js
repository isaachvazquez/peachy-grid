var menuButton = document.querySelector('.mobile-menu-button'),
    navContent = document.querySelector('.nav-content');

// Menu Button Click Event Handler
menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  if(navContent.classList.contains('active')){
    navContent.classList.remove('active');
  } else {
    navContent.classList.add('active');
  }
});
