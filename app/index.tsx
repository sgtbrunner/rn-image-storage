import { StyleSheet, Dimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { IMAGES } from '@/constants/Images';
import { GalleryImageItem } from '@/components/GalleryImageItem';
import { useCallback } from 'react';
import { ImageProps } from '@/types';

const LIMIT = 100;
const OFFSET = 120;

export default function Gallery() {
  const screenHeight = Dimensions.get('screen').height;
  const { containerStyle } = styles(screenHeight - OFFSET);

  const renderImage = useCallback(
    ({ item: { id, download_url } }: { item: ImageProps }) => (
      <GalleryImageItem id={id} uri={download_url} />
    ),
    []
  );

  return (
    <View style={containerStyle}>
      <FlashList
        data={IMAGES}
        numColumns={2}
        estimatedItemSize={LIMIT}
        keyExtractor={({ id }) => id}
        renderItem={renderImage}
      />
    </View>
  );
}

const styles = (height: number) =>
  StyleSheet.create({
    containerStyle: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      height,
    },
  });
