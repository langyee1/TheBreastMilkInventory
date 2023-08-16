import { Ionicons } from '@expo/vector-icons';

export const navOptions = (nav) => {
    return {
        headerTintColor: '#0A4158',
        headerStyle: {
            backgroundColor: 'lightyellow',
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
        },
        headerRight: () => (
            <Ionicons name="menu" size={32} color="#0A4158" onPress={()=>nav.toggleDrawer()}
            />
        ),
    }
}