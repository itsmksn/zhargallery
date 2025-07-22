const thumbs = document.querySelectorAll('.thumb img');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.classList.remove('hidden');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  overlayImg.src = '';
});
