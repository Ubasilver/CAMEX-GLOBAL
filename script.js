document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('orderForm').classList.add('hidden');
  document.getElementById('orderSuccess').classList.remove('hidden');
});