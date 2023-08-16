import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";

const ProperStorageScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TopBar></TopBar>
            
            <View>
                <Text style={styles.title}> {"\n\n"}Proper storage Indications and Hygiene{"\n\n"}</Text>
                <Image source={require('../assets/Images/freezer-2.jpg')} style={styles.contentImage} resizeMode="contain"/>
                <Text style={styles.contentText}>
                    {"\n\n"}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. 
                    {"\n\n"}
                    Commodo nulla facilisi nullam vehicula. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Gravida neque convallis a cras semper auctor neque vitae. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ornare arcu odio ut sem nulla pharetra diam sit. Erat imperdiet sed euismod nisi porta lorem. Orci sagittis eu volutpat odio facilisis mauris.
                    {"\n\n"}
                </Text>
            </View>

            <View style={[styles.contentSection, styles.reverseLayout]}>
                <Image source={require('../assets/Images/bottles-1.jpg')} style={styles.contentImageSide}/>
                <Text style={styles.contentText}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 
                    {"\n\n"}
                    Donec et odio pellentesque diam. Faucibus et molestie ac feugiat sed lectus vestibulum.</Text>
            </View>

            <View style={styles.contentSection}>
                <Image source={require('../assets/Images/pumping-1.jpg')} style={styles.contentImageSide} />
                <Text style={styles.contentText}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    {"\n\n"}
                    Turpis in eu mi bibendum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Tristique senectus et netus et malesuada. 
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',
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
        width: '90%', 
        alignSelf: 'center',
        height: undefined,
        aspectRatio: 1, 
    },
    contentImageSide: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    contentText: {
        flex: 1,
        color: '#0A4158',
        padding: 10,
    }
});

export default ProperStorageScreen;
