import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

const RegisterMilkScreen = () => {
    const [timestamp, setTimestamp] = useState("");
    const [amount, setAmount] = useState("");
    const [container, setContainer] = useState("");
    const [type, setType] = useState("");
    const [cad, setCad] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleRegisterMilk = () => {
        // Construct the request body
        const newMilkUnit = {
        timestamp: timestamp,
        amount: amount,
        container: container,
        type: type,
        cad: cad,
    };

    // Make a POST request to your backend API using Axios
    axios.post("http://127.0.0.1:5000/milks", newMilkUnit)
        .then((response) => {
            // Handle the response from the backend if needed
            setResponseText(`Server Response: ${response.data.message}`);
        })
        .catch((error) => {
            setResponseText(`Error creating milk unit: ${error.message}`);
        });
    };

    return (
        <View style={styles.screen}>
        <Text>This is the register milk screen</Text>
        <TextInput
            style={styles.input}
            placeholder="Timestamp"
            value={timestamp}
            onChangeText={setTimestamp}
        />
        <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
        />
        <TextInput
            style={styles.input}
            placeholder="Container"
            value={container}
            onChangeText={setContainer}
        />
        <TextInput
            style={styles.input}
            placeholder="Type"
            value={type}
            onChangeText={setType}
        />
        <TextInput
            style={styles.input}
            placeholder="CAD"
            value={cad}
            onChangeText={setCad}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegisterMilk}>
            <Text style={styles.buttonText}>Register Milk Unit</Text>
        </TouchableOpacity>
        {responseText !== "" && <Text style={styles.responseText}>{responseText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "yellow",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
});

export default RegisterMilkScreen;