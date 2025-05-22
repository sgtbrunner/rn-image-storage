import { BLUR_HASH } from '@/constants';
import { useImages } from '@/store/hooks/images';
import { ImageBackground } from 'expo-image';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

type ImageDetailsProps = {
  /** Id of the displayed image */
  id: string;
};

export default function ImageDetails() {
  const { getImage } = useImages();
  const navigation = useNavigation();
  const { height } = Dimensions.get('screen');
  const { imageStyle } = styles(height);
  const { id } = useLocalSearchParams<'/details', ImageDetailsProps>();

  const image = getImage(id);

  useEffect(() => {
    navigation.setOptions({ title: image?.author });
  }, [image?.author, navigation]);

  return (
    <ImageBackground
      style={imageStyle}
      contentFit='cover'
      cachePolicy='memory-disk'
      placeholder={{ blurhash: BLUR_HASH }}
      source={{ uri: image?.download_url }}
    />
  );
}

const styles = (height: number) =>
  StyleSheet.create({
    imageStyle: {
      height,
    },
  });
