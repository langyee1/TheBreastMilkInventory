import React from "react";
import { Text, View, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";

const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TopBar></TopBar>
        <Text>This is the about screen</Text>
        </View>
    );
    };

export default AboutScreen;