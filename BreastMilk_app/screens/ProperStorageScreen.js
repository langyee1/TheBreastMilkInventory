import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";

const ProperStorageScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TopBar></TopBar>
            
            <View style={styles.contentSection}>
                <Image source={require('../assets/Images/Jar_with_diamond_100x100.png')} style={styles.contentImage} />
                <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</Text>
            </View>

            <View style={[styles.contentSection, styles.reverseLayout]}>
                <Image source={require('../assets/Images/Jar_with_diamond_100x100.png')} style={styles.contentImage} />
                <Text style={styles.contentText}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
            </View>

            <View style={styles.contentSection}>
                <Image source={require('../assets/Images/Jar_with_diamond_100x100.png')} style={styles.contentImage} />
                <Text style={styles.contentText}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEEBA0',
    },
    contentSection: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    reverseLayout: {
        flexDirection: 'row-reverse',
    },
    contentImage: {
        width: 100,
        height: 100,
        marginRight: 16,
    },
    contentText: {
        flex: 1,
        color: '#0A4158',
    }
});

export default ProperStorageScreen;
