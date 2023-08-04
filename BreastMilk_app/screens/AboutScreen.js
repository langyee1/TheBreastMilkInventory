import { StyleSheet, Text, View } from "react-native";


const AboutScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the about screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:10,
    }
})

export default AboutScreen;