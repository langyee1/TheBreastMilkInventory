import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
        headerTintColor: '#2d2d2d',
        headerStyle: {
            backgroundColor: 'lightyellow',
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
        },
        headerRight: () => (
            <Ionicons
                name = 'menu'
                size= {32}
                color = 'black'
                onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerLeft: () => (
            <Text style={{color:'black', fontSize: 30, paddingLeft: 5}}>Logo</Text>
        )
    },
    homeButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
    },
});

export default ProperStorageScreen;