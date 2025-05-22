import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        persistor={persistor}
      ></PersistGate>
      <QueryClientProvider client={queryClient}>
        <StatusBar style='auto' />
        <Stack>
          <Stack.Screen
            name='index'
            options={{ headerTitle: 'Gallery', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name='details'
            options={{
              headerTitleAlign: 'center',
              headerBackTitle: 'Back',
            }}
          />
          <Stack.Screen name='+not-found' options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </Provider>
  );
}
