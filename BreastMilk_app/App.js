import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MyDrawer } from './navigation/drawer';
import Swiper from 'react-native-swiper';
import { useState } from 'react';


export default function App() {
  const [completedOnboarding, setCompletedOnboarding] = useState(false);
  if (!completedOnboarding) {
    return (
      <Swiper
        style={styles.wrapper} 
        showsButtons={false}
        loop={false} // Disable looping of slides
        onIndexChanged={(index) => {
          if (index === 4) {
            setCompletedOnboarding(true);
          }
        }}
      >
        <View style={styles.slide}>
          {/*<Image source={require('./path_to_image1.png')} style={styles.image} />*/}
          <Text>Page 1</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 3</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 4</Text>
        </View>
        <View style={styles.slide}>
          <Text>Page 5</Text>
          <Button title="Get Started" onPress={() => setCompletedOnboarding(true)} />
        </View>
      </Swiper>
    );
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
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});


