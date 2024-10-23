import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({name, source, score}) => {
    return <View>
        <Text>{name}</Text>
        <Image source={source}></Image>
        <Text> {score}</Text>
     </View>
}

const styles = StyleSheet.create({
})

export default ImageDetail