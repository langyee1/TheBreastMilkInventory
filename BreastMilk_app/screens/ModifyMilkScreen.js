import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {HeaderBackButton} from "@react-navigation/elements";
import { Picker } from "@react-native-picker/picker";

const ModifyMilkScreen = () => {
    const [unitId, setUnitId] = useState("");
    const [milkData, setMilkData] = useState(null);
    const [formData, setFormData] = useState({
        timestamp: "",
        container: "",
        type: "",
        cad: "",
    });
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Modify Milk Unit Data',
            headerTitleStyle: {
                fontFamily: 'Verdana',
            },
            headerLeft: () => (
                <HeaderBackButton label="chevron-back" tintColor="#0A4158"  size={32} color="#2d2d2d" onPress={() => navigation.goBack()} />
            )
        })
    })

    const fetchMilkData = async () => {
        try {
        const response = await axios.get(`https://milkbuddy.onrender.com/milks/${unitId}`);
        
        if (response.status === 200) {
            setMilkData(response.data);
            setFormData(response.data); 
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

    const handleContainerChange = (containerType) => {
            let cad = 0;
            if (containerType === "Freezer") {
            cad = 180;
            } else if (containerType === "Refrigerator") {
            cad = 2;
            }
        
            setFormData({
            ...formData,
            container: containerType,
            cad: cad.toString(),
            });
        };

    const handleRefreshData = async () => {
        try {
        //const response = await axios.put(`https://milkbuddy.onrender.com/milks${unitId}`, formData);

        const updatedMilkData = { ...milkData, ...formData };

        const response = await axios.put(
            `https://milkbuddy.onrender.com/milks/${unitId}`,
            updatedMilkData
        );

        if (response.status === 200) {
            Alert.alert("Success", "Milk data updated successfully!");
        } else {
            Alert.alert("Error", "Failed to update milk data.");
        }
        } catch (error) {
        Alert.alert("Error", "An error occurred while updating milk data.");
        }
    };

    return (
        <View style={styles.screen}>
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
            <Text style={styles.output}>Unit ID: {milkData.id}</Text>
            <Text style={styles.output}>Timestamp: {milkData.timestamp}</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={formData.container}
                    onValueChange={(value) => handleContainerChange(value)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Container" value="" />
                    <Picker.Item label="Freezer" value="Freezer" />
                    <Picker.Item label="Countertop" value="Countertop" />
                    <Picker.Item label="Refrigerator" value="Refrigerator" />
                </Picker>
            </View>
            <TextInput
                style={styles.input}
                value={formData.type}
                onChangeText={(text) => setFormData({ ...formData, type: text })}
                placeholder="Enter Type"
            />

            <TouchableOpacity style={styles.button} onPress={handleRefreshData}>
                <Text style={styles.buttonText}>Refresh Data</Text>
            </TouchableOpacity>
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
        borderWidth: 1,
        borderColor: "#C89DD8",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontFamily: 'Verdana',
        fontSize: 16,
    },
    button: {
        backgroundColor: "#FFED86",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#0A4158',
        textAlign: "center",
        fontFamily: 'Verdana',
    },
    output: {
        fontSize: 16,
        color: '#0A4158',
        fontFamily: 'Verdana',
    },
});

export default ModifyMilkScreen;

