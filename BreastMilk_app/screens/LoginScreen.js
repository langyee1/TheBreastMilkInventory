import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const LoginScreen = ({onDone}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (username === '' || password === '') {
            Alert.alert('Please enter both username and password');
        } else {
            Alert.alert(`Logged in as ${username}`);
            onDone(); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'lightyellow',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Verdana',
        color: '#0A4158',
        marginBottom: 20,
        textAlign: 'center',
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
});

export default LoginScreen;
