import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProperStorageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.homeButton}>Back</Text>
        </TouchableOpacity>
        <Text>This is the milk storage suggestions screen</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
    homeButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
    },
});

export default ProperStorageScreen;