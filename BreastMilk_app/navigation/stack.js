import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RegisterMilkScreen from '../screens/RegisterMilkScreen';
import ModifyMilkScreen from '../screens/ModifyMilkScreen';
import StatsScreen from '../screens/StatsScreen';
import ReadMilkScreen from '../screens/ReadMilkScreen';

const Stack = createStackNavigator();

export const HomeStack = () =>  {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register milk unit" component={RegisterMilkScreen} />
        <Stack.Screen name="Read milk unit" component={ReadMilkScreen} />
        <Stack.Screen name="Modify milk unit" component={ModifyMilkScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
        </Stack.Navigator>
    );
}