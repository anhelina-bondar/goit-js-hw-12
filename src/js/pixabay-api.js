const API_KEY = '53613119-f2730f8cf542fb1098fca49a3';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Ошибка при загрузке изображений');
  const data = await response.json();
  return data;
}
