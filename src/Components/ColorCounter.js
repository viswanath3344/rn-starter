import React from "react";
import { Text, View, Button } from "react-native";

const ColorCounter = ({color, onIncrement, onDecrement}) => {
 return <View>
     <Text>{color}</Text>
     <Button 
     title={`Increment ${color}`}
     onPress={() => onIncrement()}
     />

     <Button 
     title= {`Decrement ${color}`}
     onPress={() => onDecrement()}
     />
 </View>
};

export default ColorCounter;