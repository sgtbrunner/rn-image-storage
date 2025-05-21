import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function Index() {


  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <Link href='/details'>
        <ThemedText type='link'>Go to details screen!</ThemedText>
      </Link>
    </ThemedView>
  );
}
