import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { MyDrawer } from './navigation/drawer';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboardingCompleted(true);
  };

  const handleLoginComplete = () => {
    setIsLoggedIn(true);
  };

  if (!isOnboardingCompleted) {
    return <OnboardingScreen onDone={handleOnboardingComplete} />;
  }

  if (!isLoggedIn) {
    return <LoginScreen onDone={handleLoginComplete} />;
  }

  return (
    <NavigationContainer >
      <MyDrawer />
    </NavigationContainer>
  );
}


