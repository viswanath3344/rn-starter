import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return (
    <View>
        <Button
        title="Add Color"
        onPress={() => {
         setColors([...colors , randomColor()])
        }}
        />
        
        <FlatList 
        keyExtractor={item => {
            console.log(item)
            return item
        }}
        data={colors}
        renderItem={({item}) => {
            return <View style = {{
                height: 100,
                width: 100, 
                marginBottom:10,
                backgroundColor: item
            }}  />
        }}
        />
       
    </View>
    )
};

const randomColor = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen