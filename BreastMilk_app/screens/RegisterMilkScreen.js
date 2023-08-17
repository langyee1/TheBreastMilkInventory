import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Picker} from '@react-native-picker/picker';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {HeaderBackButton} from "@react-navigation/elements";


const RegisterMilkScreen = () => {
    const [amount, setAmount] = useState("");
    const [container, setContainer] = useState("");
    const [type, setType] = useState("");
    const containerOptions = ["Countertop", "Refrigerator", "Freezer"];
    const [responseText, setResponseText] = useState("");

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'New Milk Unit',
            headerTitleStyle: {
                fontFamily: 'Verdana',
            },
            headerLeft: () => (
                <HeaderBackButton label="chevron-back" tintColor="#0A4158"  onPress={() => navigation.goBack()} />
            )
        })
    })

    const handleRegisterMilk = () => {
        const currentTimestamp = new Date();

        let defaultCad = "";
        console.log(container)
        if (container.toLowerCase() === "freezer") {
            defaultCad = "180";
        } else if (container.toLowerCase() === "refrigerator") {
            defaultCad = "3";
        } else if (container.toLowerCase() === "countertop") {
            defaultCad = "1";
        }

        
        const newMilkUnit = {
            timestamp: currentTimestamp,
            amount: amount,
            container: container,
            type: type,
            cad: defaultCad !== "" ? defaultCad : "", 
        };
//"http://127.0.0.1:5000/milks"
    axios.post("https://milkbuddy.onrender.com/milks", newMilkUnit)
        .then((response) => {
            setResponseText(`${response.data.message}`);
        })
        .catch((error) => {
            setResponseText(`Error creating milk unit: ${error.message}`);
        });
    };

    return (
        <View style={styles.screen}>
        <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
        />
        <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Container:</Text>
            <Picker
            selectedValue={container}
            onValueChange={(itemValue) => setContainer(itemValue)}
            style={styles.picker}
            >
            {containerOptions.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
            ))}
            </Picker>
        </View>
        <TextInput
            style={styles.input}
            placeholder="Type"
            value={type}
            onChangeText={setType}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegisterMilk}>
            <Text style={styles.buttonText}>Register Milk Unit</Text>
        </TouchableOpacity>
        {responseText !== "" && <Text style={styles.responseText}>{responseText} , please proceed to tag your milk unit with this ID.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: 'lightyellow',
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
    responseText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'Verdana',
        color: '#0A4158',
    },
    pickerLabel: {
        fontFamily: 'Verdana',
        fontSize: 16,
    },
    pickerContainer: {
    },
});

export default RegisterMilkScreen;