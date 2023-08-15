import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import VideoPlayer from '../components/video-player';

//https://youtube.com/shorts/iqgtGOrbXrM?feature=share

const OnboardingScreen = ({ onDone }) => {
    return (
        <Swiper style={styles.wrapper}  loop={false}>
            <View style={styles.slide}>
            {/*<Image source={require('./path_to_image1.png')} style={styles.image} />*/}
                <Text>Page 1</Text>
            </View>
            <View style={styles.slide}>
                <Text>Page 2</Text>
            </View>
            <View style={styles.slide}>
                <VideoPlayer videoSource={{uri:'https://www.youtube.com/embed/iqgtGOrbXrM'}} />
                <Text>Page 3</Text>
            </View>
            <View style={styles.slide}>
                <Text>Page 4</Text>
            </View>
            <View style={styles.slide}>
                <Text style={{ color: 'black' }}>Page 5</Text>
                <Button title="Get Started!" onPress={onDone}  />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default OnboardingScreen;
