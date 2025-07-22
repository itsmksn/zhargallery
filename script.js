document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // 1) Завантажуємо список зображень
  fetch('images.json')
    .then(res => res.json())
    .then(images => {
      images.forEach(src => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        item.appendChild(img);
        gallery.appendChild(item);

        // відкриття в lightbox
        img.addEventListener('click', () => {
          lightboxImg.src = src;
          lightbox.classList.remove('hidden');
        });
      });

      // 2) Ініціалізуємо Masonry після того, як всі картинки підвантажаться
      imagesLoaded(gallery, () => {
        new Masonry(gallery, {
          itemSelector: '.grid-item',
          gutter: 10,
          fitWidth: true
        });
      });
    })
    .catch(err => console.error('Не вдалося завантажити images.json:', err));

  // 3) закриття lightbox
  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  });
});
