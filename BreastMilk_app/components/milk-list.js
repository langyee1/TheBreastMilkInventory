import React, { useState } from "react";
import { Text, View , TouchableOpacity} from "react-native";
import { SeedData } from "../data/seed";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import MilkUnit from "./milk-unit";

const MilkList = () => {
    const [milkData, setMilkData] = useState(SeedData);
    const [loading, setLoading] = useState(false);
    
    const renderItem = ({item}) => {
        return <MilkUnit 
                    id={item.id} 
                    timestamp={item.timestamp}
                    amount={item.amount} 
                    container={item.container} 
                    type={item.type} 
                    cad={item.cad}
                />
        };

    const handleLoadMore = () => {
        // Simulate loading more data
        setLoading(true);
        setTimeout(() => {
          const newData = [...milkData, ...SeedData]; // Append the same data for demonstration
            setMilkData(newData);
            setLoading(false);
        }, 1000); // Simulate an asynchronous API call
    };

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
            <TouchableOpacity
                style={{ alignItems: "center", padding: 10, backgroundColor: "lightgray" }}
                disabled={loading}
                onPress={handleLoadMore}
            >
                <Text>{loading ? "Loading..." : "Load More"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MilkList;