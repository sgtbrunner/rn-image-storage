import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );
};

export const withLoading =
  (
    /**
     * The element (invoked component) to be rendered when loading is done
     */
    WrappedComponent: React.JSX.Element
  ) =>
  // eslint-disable-next-line react/display-name
  (
    /**
     * Boolean that controls whether the component is loading or not
     */
    loading: boolean
  ) =>
    loading ? <Loading /> : WrappedComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
