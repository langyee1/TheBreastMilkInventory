import { DrawerItem, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import ProperStorageScreen from '../screens/ProperStorageScreen';
import AboutScreen from '../screens/AboutScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Linking, View, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    label: {
        color: '#0A4158',
        fontFamily: 'Verdana',
        fontSize: 16,
    },
    safeAreaView: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'lightyellow',
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
    },
});

const CustomDrawerContent = (props) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require("../assets/Images/Fridge.png")}
                />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label={({ focused }) => (
                        <Text style={styles.label}>MilkBuddy Home</Text>
                    )}
                    activeBackgroundColor='#C89DD8'
                    onPress={() => props.navigation.navigate('The Breast Milk App')}
                />
                <DrawerItem
                    label={({ focused }) => (
                        <Text style={styles.label}>Storage Indications</Text>
                    )}
                    activeBackgroundColor='#C89DD8'
                    onPress={() => props.navigation.navigate('Storage Indications')}
                />
                <DrawerItem
                    label={({ focused }) => (
                        <Text style={styles.label}>About</Text>
                    )}
                    activeBackgroundColor='#C89DD8'
                    onPress={() => props.navigation.navigate('About')}
                />
                <DrawerItem
                    label={({ focused }) => (
                        <Text style={styles.label}>Additional Resources</Text>
                    )}
                    onPress={() => Linking.openURL('https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm')}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

export const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen name="The Breast Milk App" component={HomeStack} />
            <Drawer.Screen name="Storage Indications" component={ProperStorageScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
};
