import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import MilkList from "../components/milk-list";


const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={StyleSheet.screen}>
            <Text>This is the home screen</Text>
            <Button style={StyleSheet.btncontainer} title="Register Milk Unit" onPress={()=> navigation.navigate('Register milk unit')}></Button>     
            <Button style={StyleSheet.btncontainer} title="Read Milk unit" onPress={()=> navigation.navigate('Read milk unit')}></Button>
            <Button style={StyleSheet.btncontainer} title="Modify Milk unit" onPress={()=> navigation.navigate('Modify milk unit')}></Button>     
            <Button style={StyleSheet.btncontainer} title="Stats" onPress={()=> navigation.navigate('Stats')}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
    },
    btncontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC72C', // Medela brand's yellow color
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 2, // For Android shadow
        shadowColor: '#000000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF', // White text color for better contrast
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
})

export default HomeScreen;