import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './navigation/stack';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer styles = {styles.container}>
      <HomeStack>

      </HomeStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
  },
});


