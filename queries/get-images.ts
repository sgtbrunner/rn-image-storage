import { ImageItem } from '@/store/slices/images';
import { IMAGE_ENDPOINT_BASE_URL, LIMIT } from '../constants';
import { PayloadAction } from '@reduxjs/toolkit';

type SetImagesFunction<T> = (images: T[]) => PayloadAction<T[]>;
export type GetImagesQueryFunctionResponse = ImageItem[];
export type GetImagesQueryFunctionError = Error;

export const imagesQueryKey = ['images'];
export const getImagesQueryFunction =
  (setImages: SetImagesFunction<ImageItem>) => async () => {
    const response = await fetch(`${IMAGE_ENDPOINT_BASE_URL}?limit=${LIMIT}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = (await response.json()) as ImageItem[];

    if (data) setImages(data);

    return data;
  };
