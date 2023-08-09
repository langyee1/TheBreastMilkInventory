import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import ProperStorageScreen from '../screens/ProperStorageScreen';
import AboutScreen from '../screens/AboutScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Linking, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, 
            }}
            drawerContent={(props)=>{
                return (
                    <SafeAreaView style={{flex: 1, paddingTop:20, backgroundColor: 'lightyellow'}}>
                        <View
                            style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Image
                                    style={{width:100, resizeMode: 'contain'}}
                                    source={require("../assets/Images/Jar_with_diamond_100x100.png")}></Image>
                        </View>
                        <DrawerItemList {...props} 
                            drawerContentOptions={{
                            activeTintColor: 'red', 
                            inactiveTintColor: 'purple', 
                            }}
                        />
                        <DrawerItem
                            label="Additional Resources"
                            onPress={() => Linking.openURL('https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm')}
                        />
                    </SafeAreaView>
                );
            }}
            >
            <Drawer.Screen name="The Breast Milk App" component={HomeStack} />
            <Drawer.Screen name="Storage Indications" component={ProperStorageScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
}