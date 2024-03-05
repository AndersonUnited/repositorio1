

function toggleMenu() {
  var menu = document.getElementById('MENU');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('click', function(event) {
  var targetElement = event.target;
  var menu = document.getElementById('MENU');
  var sanduiche = document.getElementById('sanduiche');
  if (!targetElement.closest('#MENU') && !targetElement.closest('#sanduiche')) {
      menu.style.display = 'none';
  }
});