import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ImageState {
  images: ImageItem[];
}

const initialState: ImageState = {
  images: [],
};

const slice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageItem[]>) => {
      state.images = action.payload;
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
});

export const { setImages, clearImages } = slice.actions;

export default slice.reducer;
