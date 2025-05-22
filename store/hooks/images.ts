import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { ImageItem, setImages as setImagesSlice } from '../slices/images';

export const useImages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const images = useSelector((state: RootState) => state.images.images);

  const getImage = (imageId: string) =>
    images.find((image) => image.id === imageId);

  const setImages = (images: ImageItem[]) => dispatch(setImagesSlice(images));

  return { images, getImage, setImages };
};
