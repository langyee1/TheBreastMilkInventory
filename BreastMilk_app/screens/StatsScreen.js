import { StyleSheet, Text, View } from "react-native";
import MilkList from "../components/milk-list";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {HeaderBackButton} from "@react-navigation/elements";


const StatsScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Data Visualization',
            headerLeft: () => (
                <HeaderBackButton label="Previous" onPress={() => navigation.goBack()} />
            )
        })
    })

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