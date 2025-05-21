import { useLocalSearchParams } from 'expo-router';
import { IMAGES } from '../constants/Images';
import { StyleSheet, ImageBackground } from 'react-native';

type ImageDetailsProps = {
  /** Id of the displayed image */
  id: string;
};

export default function ImageDetails() {
  const { id } = useLocalSearchParams<'/details', ImageDetailsProps>();

  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: IMAGES.find((image) => image.id === id)?.download_url }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
