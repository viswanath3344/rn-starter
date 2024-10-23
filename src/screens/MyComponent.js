import React from "react";  
import { Text, StyleSheet, View } from "react-native";

const MyComponent = () => {
    let name = "Viswa"
    return (
        <View>
            <Text style={styles.textHeaderStyle}> Getting started with React Native </Text>
            <Text style = {styles.textSubHeaderStyle}> My name is {name} </Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    textHeaderStyle: {
       fontSize: 45
    },
    textSubHeaderStyle: {
        fontSize: 25
    }
});

export default  MyComponent;