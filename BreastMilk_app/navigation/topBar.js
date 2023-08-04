import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const TopBar = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleToggleDrawer = () => {
        navigation.toggleDrawer();
    };

    return (
        <SafeAreaView edges={['top']} style={styles.safeAreaView}>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="chevron-back" size={32} color="#2d2d2d" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleDrawer}>
            <Ionicons name="menu" size={32} color="#2d2d2d" />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'lightyellow',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
});

export default TopBar;
