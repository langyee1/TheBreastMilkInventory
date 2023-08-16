import { Ionicons } from '@expo/vector-icons';

export const navOptions = (nav) => {
    return {
        headerTintColor: '#2d2d2d',
        headerStyle: {
            backgroundColor: 'lightyellow',
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
        },
        headerRight: () => (
            <Ionicons name="menu" size={32} color="#2d2d2d" onPress={()=>nav.toggleDrawer()}
            />
        ),
    }
}