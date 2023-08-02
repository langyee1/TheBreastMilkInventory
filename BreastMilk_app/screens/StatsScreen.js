import { StyleSheet, Text, View } from "react-native";
import MilkList from "../components/milk-list";


const StatsScreen = () => {

    return (
        <View style={StyleSheet.screen}>
            <Text>This is the stats screen</Text>
            <MilkList></MilkList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:10,
    }
})

export default StatsScreen;