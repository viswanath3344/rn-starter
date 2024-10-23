import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_CHANGE = 15 

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
   
    const setColor = (color, change) => {
        // color === 'Red'| 'Green' | 'Blue'
        // change === '+15 | -15'

        switch (color) {
            case 'Red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case "Green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case "Blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }

    return <View>
        <ColorCounter color="Red"
            onIncrement={() => setColor("Red", COLOR_CHANGE)}
            onDecrement={() => setColor("Red", -1 *COLOR_CHANGE)}
        />
        <ColorCounter color="Green"
            onIncrement={() => setColor("Green", COLOR_CHANGE)}
            onDecrement={() => setColor("Green", -1*COLOR_CHANGE)}
        />
        <ColorCounter color="Blue"
            onIncrement={() => setColor("Blue", COLOR_CHANGE)}
            onDecrement={() => setColor("Blue", -1*COLOR_CHANGE)}
        />

        <View 
        style = {{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}
        />
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;