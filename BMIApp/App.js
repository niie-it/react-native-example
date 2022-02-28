import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { BMIDraft } from './BmiDraft';
import { BMI } from './Bmi';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <BMIDraft /> */}
      <BMI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
