import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";


const ModifyMilkScreen = () => {
    const route = useRoute()
    const {unitId,timestamp,container} = route.params
    return (
        <View style={StyleSheet.screen}>
            <Text style={{fontSize:20}}>This is the modify milk screen for {unitId}</Text>
            <Text style={{fontSize:20}}>its date is {timestamp}</Text>
            <Text style={{fontSize:20}}>stored in {container}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
    }
})

export default ModifyMilkScreen;