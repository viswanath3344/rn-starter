import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_CHANGE = 15 

const reducer = (state, action) => {
    switch (action.type) {
        case 'red_change':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? 
            state : { ...state, red: state.red + action.payload }
        case 'green_change':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : 
             { ...state, green: state.green + action.payload }
        case 'blue_change':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state :
             { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const SquareScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer,{red: 0, green:0, blue:0})
    const {red, green, blue } = state
    return <View>
        <ColorCounter color="Red"
            onIncrement={() => dispatch({type:'red_change', payload: COLOR_CHANGE}) }
            onDecrement={() => dispatch({type:'red_change', payload: -1*COLOR_CHANGE}) }
        />
        <ColorCounter color="Green"
            onIncrement={() => dispatch({type:'green_change', payload: COLOR_CHANGE})}
            onDecrement={() => dispatch({type:'green_change', payload: -1*COLOR_CHANGE})}
        />
        <ColorCounter color="Blue"
            onIncrement={() => dispatch({type:'blue_change', payload: COLOR_CHANGE})}
            onDecrement={() => dispatch({type:'blue_change', payload: -1*COLOR_CHANGE})}
        />

        <View 
        style = {{
            height: 150, 
            width: 150, 
            backgroundColor: `rgb(${red},${green},${blue})`
        }}
        />
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreenWithReducer;