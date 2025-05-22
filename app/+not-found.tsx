import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.subtitle}>This screen does not exist.</Text>
        <Button title='Go back to where you came from!' onPress={goBack} />
      </View>
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
