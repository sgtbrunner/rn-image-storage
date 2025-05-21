import { useRouter } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type='title' style={styles.title}>
          Oops!
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          This screen does not exist.
        </ThemedText>
        <Button title='Go back to where you came from!' onPress={goBack} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    rowGap: 24,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
