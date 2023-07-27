import { StyleSheet, Text, View } from "react-native";


const RegisterMilkScreen = () => {

    return (
        <View style={StyleSheet.screen}>
            <Text>This is the register milk screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
    }
})

export default RegisterMilkScreen;