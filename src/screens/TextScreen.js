import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [username, setUsername] = useState("")  
  return <View>
    <Text>Enter Username:</Text>
    <TextInput 
    autoCapitalize="false"
    autoCorrect = "false"
    placeholder="Enter username"
    style = {styles.textInput} 
    value= {username}
    onChangeText={newText => setUsername(newText)}
    />
    <Text>My Username is {username}</Text>
    {username.length == 0 || username.length>4 ? null : <Text>Enter valid username </Text> }
  </View>
};

const styles = StyleSheet.create({
    textInput: {
        height:50,
        alignContent: "center",
        paddingLeft:20,
        fontSize: 50,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen