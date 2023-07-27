import { Text, View } from "react-native";
import { SeedData } from "../data/seed";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import MilkUnit from "./milk-unit";

const MilkList = () => {
    const renderItem = ({item}) => {
        return <MilkUnit 
                    id={item.id} 
                    date={item.date} 
                    time={item.time} 
                    amount={item.amount} 
                    container={item.container} 
                    type={item.type} 
                    cad={item.cad}
                />
    }
    return (
        <View>
            <Text>Milk List</Text>
            <FlatList 
                data={SeedData}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={()=> console.log('refreshing')}>
                    </RefreshControl>
                }
                
            ></FlatList>
        </View>
    );
}

export default MilkList;