import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './stack';
import ProperStorageScreen from '../screens/ProperStorageScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="The Breast Milk App" component={HomeStack} />
            <Drawer.Screen name="Storage Indications" component={ProperStorageScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />

        </Drawer.Navigator>
    );
}