import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {HeaderBackButton} from "@react-navigation/elements";

const ReadMilkScreen = () => {
    const [unitId, setUnitId] = useState("");
    const [milkData, setMilkData] = useState(null);
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Fetch Milk Unit Data',
            headerLeft: () => (
                <HeaderBackButton label="chevron-back" tintColor="#2d2d2d"  onPress={() => navigation.goBack()} />
            )
        })
    })
    const fetchMilkData = async () => {
        try {
        const response = await axios.get(`http://127.0.0.1:5000/milks/${unitId}`);

        if (response.status === 200) {
            setMilkData(response.data);
        } else {
            Alert.alert("Error", "Failed to fetch milk data.");
        }
        } catch (error) {
        Alert.alert("Error", "An error occurred while fetching milk data.");
        }
    };

    const handleFetchData = () => {
        if (unitId.trim() === "") {
        Alert.alert("Error", "Please enter a valid unit ID.");
        return;
        }

        fetchMilkData();
    };

    return (
        <View style={styles.screen}>
        <Text>This is the Read milk screen</Text>
        <TextInput
            style={styles.input}
            value={unitId}
            onChangeText={(text) => setUnitId(text)}
            placeholder="Enter Unit ID"
        />
        <TouchableOpacity style={styles.button} onPress={handleFetchData}>
            <Text style={styles.buttonText}>Get Milk Information</Text>
        </TouchableOpacity>

        {milkData && (
            <View>
            <Text>Unit ID: {milkData.id}</Text>
            <Text>Timestamp: {milkData.timestamp}</Text>
            <Text>Container: {milkData.container}</Text>
            <Text>Type: {milkData.type}</Text>
            <Text>Expires: {milkData.cad}</Text>
            </View>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "#FDDC57",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#2d2d2d',
        textAlign: "center",
    },
});

export default ReadMilkScreen;
