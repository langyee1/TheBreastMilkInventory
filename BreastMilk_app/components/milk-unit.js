import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MilkUnit = ({id,date,time,amount,container,type,cad}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Modify milk unit",{unitId: id, date, container})}>
            <Text>{date}</Text>
            <Text>{time}</Text>
            <Text>{amount}</Text>
            <Text>{container}</Text>
            <Text>{type}</Text>
            <Text>{cad}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 20,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    },
})

export default MilkUnit;

