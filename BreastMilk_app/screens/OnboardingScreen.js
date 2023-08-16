import React from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import VideoPlayer from '../components/video-player';

//https://youtube.com/shorts/iqgtGOrbXrM?feature=share
const { width, height } = Dimensions.get('window');
const OnboardingScreen = ({ onDone }) => {
    return (
        <Swiper style={styles.wrapper}  loop={false}>
            <View style={styles.slide}>
                <Image source={require("../assets/Images/Swipe-1.png")} style={styles.image} />
            </View>
            <View style={styles.slide}>
                <Image source={require("../assets/Images/Swipe-2.png")} style={styles.image} />
            </View>
            <View style={styles.slide}>
                {/*<VideoPlayer videoSource={{uri:'https://www.youtube.com/embed/iqgtGOrbXrM'}} />*/}
                <Image source={require("../assets/Images/Swipe-3.png")} style={styles.image} />
            </View>
            <View style={styles.slide}>
                <Image source={require("../assets/Images/Swipe-4.png")} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onDone}>
                        <Text style={styles.buttonText}>Get Started!</Text>
                    </TouchableOpacity>
                </View>
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
        width: width,
        height: height,
        resizeMode: 'cover', 
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    buttonContainer: {
        position: 'absolute', 
        top: 0,
        bottom: 0, 
        left: 0, 
        right: 0, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button: {
        backgroundColor: '#FFED86',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20, 
        alignItems: 'center',
    },
    buttonText: {
        color: '#0A4158',
        fontSize: 16,
        fontFamily: 'Verdana', 
    },
});

export default OnboardingScreen;
