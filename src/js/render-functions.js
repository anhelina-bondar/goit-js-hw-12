import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('#gallery');
const loader = document.querySelector('#loader');
const loadMoreBtn = document.querySelector('#load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="stats">
          <div class="stat">
            <span class="label">Likes</span>
            <span class="number">${img.likes}</span>
          </div>
          <div class="stat">
            <span class="label">Views</span>
            <span class="number">${img.views}</span>
          </div>
          <div class="stat">
            <span class="label">Comments</span>
            <span class="number">${img.comments}</span>
          </div>
          <div class="stat">
            <span class="label">Downloads</span>
            <span class="number">${img.downloads}</span>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

export { loadMoreBtn, galleryContainer };
