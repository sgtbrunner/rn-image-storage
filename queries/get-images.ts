import { IMAGE_ENDPOINT_BASE_URL, LIMIT } from '../constants';

export const imagesQueryKey = ['images'];
export const getImagesQueryFunction = async () => {
  const response = await fetch(`${IMAGE_ENDPOINT_BASE_URL}?limit=${LIMIT}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
