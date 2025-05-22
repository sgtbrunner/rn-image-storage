import { GalleryImageItem } from '@/components/GalleryImageItem';
import { withLoading } from '@/components/Loading';
import {
  getImagesQueryFunction,
  GetImagesQueryFunctionError,
  GetImagesQueryFunctionResponse,
  imagesQueryKey,
} from '@/queries/get-images';
import { useImages } from '@/store/hooks/images';
import { ImageItem } from '@/store/slices/images';
import { FlashList } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import {
  Alert,
  Dimensions,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { ERROR_ALERT_MESSAGE, ERROR_ALERT_TITLE, LIMIT, ONE_HOUR } from '../constants';

const HEIGHT_OFFSET = 120;

export default function Gallery() {
  const screenHeight = Dimensions.get('screen').height;
  const { containerStyle } = styles(screenHeight - HEIGHT_OFFSET);
  const { images, setImages } = useImages();

  const { error, refetch, isLoading, isRefetching } = useQuery<
    GetImagesQueryFunctionResponse,
    GetImagesQueryFunctionError
  >({
    staleTime: ONE_HOUR,
    queryKey: imagesQueryKey,
    queryFn: getImagesQueryFunction(setImages),
  });

  useEffect(() => {
    if (!!error) {
      Alert.alert(ERROR_ALERT_TITLE, error.message || ERROR_ALERT_MESSAGE, [
        { text: 'OK' },
      ]);
    }
  }, [error]);

  const renderImage = useCallback(
    ({ item: { id, download_url } }: { item: ImageItem }) => (
      <GalleryImageItem id={id} uri={download_url} />
    ),
    []
  );

  return withLoading(
    <View style={containerStyle}>
      <FlashList
        data={images}
        numColumns={2}
        estimatedItemSize={LIMIT}
        keyExtractor={({ id }) => id}
        renderItem={renderImage}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </View>
  )(isLoading);
}

const styles = (height: number) =>
  StyleSheet.create({
    containerStyle: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      height,
    },
  });
