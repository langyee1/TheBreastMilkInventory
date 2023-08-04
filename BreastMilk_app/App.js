import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { HomeStack } from './navigation/stack';
import { StyleSheet } from 'react-native';
import { MyDrawer } from './navigation/drawer';
import { HomeStack } from './navigation/stack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer styles = {styles.container}>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
  },
});


