import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";
import axios from "axios";
import { BarChart} from "react-native-chart-kit";

const StatsScreen = () => {
    const navigation = useNavigation();
    const [milkData, setMilkData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [babyAge, setBabyAge] = useState("");
    const [calculatedDays, setCalculatedDays] = useState(null);
    const averageMilkConsumption = {
        0: (24/3)*3,   // 0 months (Newborn)
        1: (24/3)*3,   // 1 month
        2: (24/4)*4,   // 2 months
        3: (24/4)*4,   // 3 months
        4: (24/6)*8,   // 4 months
        5: (24/6)*8,   // 5 months
        6: (24/6)*8,   // 6 months
        7: (24/6)*8,   // 7 months
        8: (24/6)*8,   // 8 months
        9: (24/6)*8,   // 9 months
        10: (24/8)*8,  // 10 months
        11: (24/8)*8,  // 11 months
        12: (24/8)*8,  // 12 months (1 year)
        };

    useEffect(() => {
        fetchMilkData();
    }, []);

    const fetchMilkData = async () => {
        try {
        const response = await axios.get("http://127.0.0.1:5000/milks");
        setMilkData(response.data);
        setLoading(false);
        } catch (error) {
        console.error("Error fetching milk data:", error);
        setLoading(false);
        }
    };

    useEffect(() => {
        navigation.setOptions({
        headerTitle: "Data Visualization",
        headerLeft: () => (
            <HeaderBackButton
            label="chevron-back"
            tintColor="#2d2d2d"
            onPress={() => navigation.goBack()}
            />
        ),
        });
    }, [navigation]);

    if (loading) {
        return (
        <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
        </View>
        );
    }

    const chartData = [ 0, 0, 0, 0, 0, 0]; 
    let totalMilk = 0;
    milkData.forEach((milk) => {
        const timestampDate = new Date(milk.timestamp);
        const today = new Date();
        const timeDifference = parseFloat(today.getTime() - timestampDate.getTime());
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
        console.log(milk.timestamp,daysDifference,milk.container, milk.amount);
        if (daysDifference <= 180) {
            totalMilk += parseFloat(milk.amount);
            if (milk.container === "Freezer"){
                const group = 180 - daysDifference;
                chartData[Math.floor(group / 30)] += parseFloat(milk.amount);
            }
        } else if (milk.container === "Refrigerator" || milk.container === "Countertop" && daysDifference < 30) {
            chartData[0] += parseFloat(milk.amount);
        } else if (daysDifference < 30) {
            chartData[1] += parseFloat(milk.amount);
        } else if (daysDifference <= 15) {
            chartData[0] += parseFloat(milk.amount);
        }
    });
    console.log(chartData);
    console.log(totalMilk);

    const handleCalculateDays = () => {
        const months = parseInt(babyAge);
        if (months >= 0 && months <= 12) {
            const days = totalMilk / averageMilkConsumption[months];
            setCalculatedDays(days.toFixed(2)); 
        } else {
            alert("Please enter a valid age between 0 and 12 months.");
        }
    };
    return (
        <View style={styles.screen}>
        <Text>This is the stats screen</Text>
        <Text>Enter baby's age (in months):</Text>
        <TextInput
            value={babyAge}
            onChangeText={(text) => setBabyAge(text)}
            keyboardType="numeric"
            />
        <TouchableOpacity onPress={handleCalculateDays}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Calculate</Text>
            </View>
        </TouchableOpacity>
        {calculatedDays !== null && (
                <View style={styles.calculatedDaysContainer}>
                    <Text>You have inventory for the following </Text>
                    <Text style={{fontSize:32}}>{calculatedDays} days</Text>
                    <View style={{ marginTop: 10 }} />
                </View>
        )}

        <View style={styles.calculatedDaysContainer}>
            <Text style={styles.buttonText}>Ounces per milk age chart:</Text>
            <View style={{ marginTop: 10 }} />
        </View>
        <BarChart
            data={{
                labels: ["1 Month", "2 Months", "3 Months", "4 Months", "5 Months", "6 Months"],
                datasets: [
                    {
                        data: chartData,
                    },
                ],
            }}
            width={350}
            height={220}
            yAxisLabel="Oz"
            xAxisLabel="months to expire"
            verticalLabelRotation={30}
            chartConfig={{
                backgroundGradientFrom: "#FDDC57",
                backgroundGradientTo: "#FDDC57",
                color: (opacity = 1) => "#2d2d2d", 
                labelColor: (opacity = 1) => "#2d2d2d", 
                propsForBackgroundLines: {
                    strokeWidth: 0, 
                },
            }}
            bezier
        />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#FDDC57",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2d2d2d",
        textAlign: "center",
    },
    calculatedDaysContainer: {
        backgroundColor: "#eaeaea",
        padding: 10,
        marginTop: 20,
        alignItems: "center",
    },
});
export default StatsScreen