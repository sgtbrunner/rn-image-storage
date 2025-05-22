import { ImageItem } from '@/store/slices/images';
import { Link } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

interface GalleryImageItemProps {
  id: ImageItem['id'];
  uri: ImageItem['download_url'];
}

export function GalleryImageItem({ id, uri }: GalleryImageItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Link href={{ pathname: '/details', params: { id } }}>
        <Image source={{ uri }} style={styles.image} />
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
});
