import {
  BLUR_HASH,
  GALLERY_IMAGE_PADDING,
  GALLERY_OUTER_SPACING,
} from '@/constants';
import { ImageItem } from '@/store/slices/images';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Dimensions, Pressable, StyleSheet } from 'react-native';

interface GalleryImageItemProps {
  id: ImageItem['id'];
  uri: ImageItem['download_url'];
}

export function GalleryImageItem({ id, uri }: GalleryImageItemProps) {
  const { width: screenWidth } = Dimensions.get('screen');
  const { containerStyles, imageStyles } = styles(screenWidth);
  return (
    <Pressable style={containerStyles}>
      <Link href={{ pathname: '/details', params: { id } }}>
        <Image
          source={{ uri }}
          style={imageStyles}
          cachePolicy='memory-disk'
          placeholder={{ blurhash: BLUR_HASH }}
        />
      </Link>
    </Pressable>
  );
}

const styles = (screenWidth: number) =>
  StyleSheet.create({
    containerStyles: {
      padding: GALLERY_IMAGE_PADDING,
    },
    imageStyles: {
      width:
        screenWidth / 2 - GALLERY_OUTER_SPACING - 2 * GALLERY_IMAGE_PADDING,
      height: 300,
      borderRadius: 8,
    },
  });
