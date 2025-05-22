import { useLocalSearchParams, useNavigation } from 'expo-router';
import { IMAGES } from '../constants/Images';
import { StyleSheet, ImageBackground } from 'react-native';
import { useEffect } from 'react';

type ImageDetailsProps = {
  /** Id of the displayed image */
  id: string;
};

export default function ImageDetails() {
  const { id } = useLocalSearchParams<'/details', ImageDetailsProps>();
  const navigation = useNavigation();
  const image = IMAGES.find((image) => image.id === id);

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
