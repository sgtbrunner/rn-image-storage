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
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect } from 'react';
import { FlashList } from '@shopify/flash-list';
import {
  Alert,
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ERROR_ALERT_MESSAGE,
  ERROR_ALERT_TITLE,
  GALLERY_OUTER_SPACING,
  LIMIT,
  ONE_HOUR,
} from '../constants';

const HEIGHT_OFFSET = 120;

export default function Gallery() {
  const { images, setImages } = useImages();
  const screenHeight = Dimensions.get('screen').height;
  const ListComponent = Platform.OS === 'ios' ? FlashList : FlatList<ImageItem>;
  const { emptyStyles, containerStyle } = styles(screenHeight - HEIGHT_OFFSET);

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
      <ListComponent
        data={images}
        numColumns={2}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        estimatedItemSize={LIMIT}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        ListEmptyComponent={
          <View style={emptyStyles}>
            <Text>No images to display!</Text>
          </View>
        }
      />
    </View>
  )(isLoading);
}

const styles = (height: number) =>
  StyleSheet.create({
    containerStyle: {
      paddingVertical: GALLERY_OUTER_SPACING,
      paddingHorizontal: GALLERY_OUTER_SPACING,
      height,
    },
    emptyStyles: {
      alignItems: 'center',
    },
  });
