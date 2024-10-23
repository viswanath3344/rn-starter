import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const FlatListComponent = () => {
    let users = [
        {name: "Viswa", age: "37"},
        {name: "Raveena", age: "29"},
        {name: "Dharma", age: "8"},
        {name: "Hanvi", age: "6"},
        {name: "Jyothi", age: "35"},
        {name: "Kalyani", age: "32"},
        {name: "John", age: "65"},
        {name: "Peter", age: "28"}
    ]

    return <FlatList
       //horizontal 
       data={users}
       keyExtractor={(item) => {
        return item.name
       }}
       renderItem={({item}) => {
        return <Text style = {styleSheet.listTextStyle}>{item.name}, Age is: {item.age} </Text>
       }}
    />
}

const styleSheet = StyleSheet.create({
    listTextStyle: {
        fontSize: 25, 
        marginBottom: 20,
       // backgroundColor: "pink"
       paddingHorizontal: 16
    }
})

export default FlatListComponent