function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open');
  const menuCloseIcon = document.getElementById('menu-close');
  mobileMenu.classList.toggle('hidden');
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
}

// to get the price value of product in form
window.onload = function() {
  // Get the price from local storage
  const price = localStorage.getItem('productPrice');

  // Debugging: Log the price to the console
  console.log("Price from localStorage:", price);

  // Set the price value in the input field if it exists
  if (price) {
      const priceInput = document.getElementById('price');
      if (priceInput) {
          priceInput.value = price;
      } else {
          console.error("Price input element not found!");
      }
  } else {
      console.error("No price found in localStorage!");
  }
};














// mobile
function toggleOverlay(card) {
  const overlay = card.querySelector('.card > div > div');
  const isActive = overlay.classList.contains('active');
  document.querySelectorAll('.card .active').forEach(o => o.classList.remove('active'));
  if (!isActive) {
      overlay.classList.add('active');
  }
}
// Close overlay when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.card')) {
      document.querySelectorAll('.card .active').forEach(o => o.classList.remove('active'));
  }
});