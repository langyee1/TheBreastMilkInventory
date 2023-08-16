import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { MyDrawer } from './navigation/drawer';
import { useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';


export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboardingCompleted(true);
  };
  
  if (!isOnboardingCompleted) {
    return <OnboardingScreen onDone={handleOnboardingComplete} />;
  }
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


