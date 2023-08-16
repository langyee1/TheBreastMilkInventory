import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
        <Image source={require("../assets/Images/Logo_Short.png")} style={styles.contentImage} />
        <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register milk unit')}>
                    <Image source={require("../assets/Images/Register.png")} style={styles.buttonLogo} />
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stats')}>
                    <Image source={require("../assets/Images/Stats.png")} style={styles.buttonLogo} />
                    <Text style={styles.buttonText}>Stats</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Read milk unit')}>
                    <Image source={require("../assets/Images/Read.png")} style={styles.buttonLogo} />
                    <Text style={styles.buttonText}>Read</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modify milk unit')}>
                    <Image source={require("../assets/Images/Modify.png")} style={styles.buttonLogo} />
                    <Text style={styles.buttonText}>Modify</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightyellow',
        paddingVertical: 20,
    },
    contentImage: {
        
    },
    buttonContainer: {
        width: '80%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        width: '45%', 
        aspectRatio: 1, 
        backgroundColor: '#FFED86',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
    },
    buttonText: {
        color: '#0A4158',
        fontSize: 16,
        fontFamily: 'Verdana',
    },
    buttonLogo: {
        width: 30,
        height: 30,
        marginBottom: 5, 
    },
});

export default HomeScreen;
