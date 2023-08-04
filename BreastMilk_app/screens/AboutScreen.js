import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {HeaderBackButton} from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
    
    return (
        <View style={styles.screen}>
            <Text>This is the about screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:10,
    }
})

export default AboutScreen;