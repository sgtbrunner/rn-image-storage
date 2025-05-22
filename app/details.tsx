import { useImages } from '@/store/hooks/images';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

type ImageDetailsProps = {
  /** Id of the displayed image */
  id: string;
};

export default function ImageDetails() {
  const { getImage } = useImages();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<'/details', ImageDetailsProps>();

  const image = getImage(id);

  useEffect(() => {
    navigation.setOptions({ title: image?.author });
  }, [image?.author, navigation]);

  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: image?.download_url }}
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
