import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayer = ({ videoSource }) => (
    <WebView
        style={styles.webview}
        javaScriptEnabled={true}
        source={{
        html: `
            <video width="100%" height="100%" controls>
            <source src="${videoSource}" type="video/mp4" />
            </video>
        `,
        }}
    />
);

const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
});

export default VideoPlayer;