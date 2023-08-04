import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {HeaderBackButton} from "@react-navigation/stack";

const AboutScreen = () => {
    
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'new title',
            headerLeft: () => (
                <HeaderBackButton label="Previous" onPress={() => navigation.goBack()} />
            )
        })
    })
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