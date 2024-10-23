import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hi There !!!</Text>
    <Button
      title="My Component"
      onPress={() => { navigation.navigate("MyComponent") }}
    />

    <Button
      title="FlatListComponent"
      onPress={() => { navigation.navigate("FlatListComponent") }}
    />

    <Button
      title="Image Screen"
      onPress={() => { navigation.navigate("Image") }}
    />

    <Button
      title="Counter Screen"
      onPress={() => navigation.navigate("Counter")}
    />

    <Button
      title="Counter Screen With Reducer"
      onPress={() => navigation.navigate("CounterWithReducer")}
    />
    <Button
      title="Color Screen"
      onPress={() => navigation.navigate("Color")}
    />

    <Button
      title="Square Screen"
      onPress={() => navigation.navigate("Square")}
    />

    <Button 
      title="Square Screen With Reducer"
      onPress={()=> navigation.navigate("SquareWithReducer")}
    />

    <Button 
     title= "Text Screen"
     onPress={() => navigation.navigate("Text")}
    />

    {/* <TouchableOpacity onPress={() => { navigation.navigate("FlatListComponent") }}>
      <Text>Go to List</Text>
      <Text>Go to List</Text>
      <Text>Go to List</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default HomeScreen;
