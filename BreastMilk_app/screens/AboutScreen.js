import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../navigation/topBar";
import { ScrollView } from "react-native-gesture-handler";

const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
                <TopBar />
                <View style={styles.bioContainer}>
                    <Image 
                        style={styles.biopic} 
                        source={require("../assets/Images/IMG_2509.png")}
                    />
                    
                    <Text style={styles.bioText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Sed adipiscing diam donec adipiscing tristique risus nec. 
                        {"\n\n"} 
                        Commodo nulla facilisi nullam vehicula. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Gravida neque convallis a cras semper auctor neque vitae. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Ornare arcu odio ut sem nulla pharetra diam sit. Erat imperdiet sed euismod nisi porta lorem. Orci sagittis eu volutpat odio facilisis mauris.
                        {"\n\n"} 
                        Accumsan in nisl nisi scelerisque. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Elit eget gravida cum sociis natoque penatibus. Diam vulputate ut pharetra sit amet aliquam id. Nisi vitae suscipit tellus mauris a diam maecenas. Quis enim lobortis scelerisque fermentum dui faucibus. 
                        {"\n\n"} 
                        Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Facilisis gravida neque convallis a cras semper auctor neque vitae. Adipiscing commodo elit at imperdiet dui accumsan sit. Massa enim nec dui nunc mattis enim ut. Sem et tortor consequat id porta nibh. Est ante in nibh mauris cursus. Sodales neque sodales ut etiam. Amet massa vitae tortor condimentum lacinia quis vel eros.
                    </Text>
                </View>
            </View>
        </ScrollView>
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
        borderRadius: 75,  
        backgroundColor: "#FFB067",  
        marginBottom: 20,
    },
    bioText: {
        color: "#0A4158",  
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20, 
        borderColor: "#C89DD8",  
        borderWidth: 1,
        padding: 20,
        backgroundColor: "lightyellow",  
        borderRadius: 15,
        fontFamily: 'Verdana',
    }
});

export default AboutScreen;
