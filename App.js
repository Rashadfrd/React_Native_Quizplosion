import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing';


export default function App() {

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
      <Landing />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
