import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";

const ProperStorageScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TopBar></TopBar>
        <Text>This is the milk storage suggestions screen</Text>
        </View>
    );
    };

export default ProperStorageScreen;