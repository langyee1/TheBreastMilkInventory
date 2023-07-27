import { StyleSheet, Text, View } from "react-native";


const ReadMilkScreen = () => {

    return (
        <View style={StyleSheet.screen}>
            <Text>This is the Read milk screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
    }
})

export default ReadMilkScreen;