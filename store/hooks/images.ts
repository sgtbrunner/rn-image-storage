import { useSelector } from 'react-redux';
import { RootState } from '..';

export const useImages = () => {
  const images = useSelector((state: RootState) => state.images.images);

  const getImage = (imageId: string) =>
    images.find((image) => image.id === imageId);

  return { images, getImage };
};
