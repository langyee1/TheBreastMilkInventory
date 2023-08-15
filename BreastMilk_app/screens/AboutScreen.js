import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";

const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TopBar />
            
            <View style={styles.bioContainer}>
                <Image 
                    style={styles.biopic} 
                    source={require("../assets/Images/Jar_with_diamond_100x100.png")}
                />
                
                <Text style={styles.bioText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec aliquet lorem. 
                    Sed luctus, justo a facilisis semper, magna libero egestas odio, sed venenatis 
                    quam mauris ut ipsum. Aenean eget dui eget risus aliquam interdum. Donec mattis 
                    quam in urna varius, ac vehicula odio elementum.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightyellow", // light yellow background
        padding: 20,
    },
    bioContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    biopic: {
        width: 150,
        height: 150,
        borderRadius: 75,  // for circular image
        backgroundColor: "#FFB067",  // orange background as placeholder
        marginBottom: 20,
    },
    bioText: {
        color: "#0A4158",  // navy blue text
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20, 
        borderColor: "#C89DD8",  // lilac border
        borderWidth: 1,
        padding: 20,
        backgroundColor: "#FFED86",  // yellow background
        borderRadius: 15,
    }
});

export default AboutScreen;
