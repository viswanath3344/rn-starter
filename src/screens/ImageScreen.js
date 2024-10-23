import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetail name = "Beach" source = {require('../../assets/beach.jpg')} score = {9} />
        <ImageDetail name = "Forest" source = {require('../../assets/forest.jpg') } score={10} />
        <ImageDetail name = "Mountain" source = { require('../../assets/mountain.jpg') } score={15}/>
    </View>

}

const styles = StyleSheet.create({
})

export default ImageScreen