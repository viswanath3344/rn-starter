import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, counter: state.counter+1} 
        case 'sub':
            return {...state, counter: state.counter-1}
        default:
            return state
    }
}

const CounterScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {counter:0})
    const {counter} = state // Object destructering....
    return <View>
        <Button
            title="Increment"
            onPress={() => dispatch({type:'add'})}
        />
        <Button
            title="Decrement"
            onPress={() => dispatch({type: 'sub'})}
        />
        <Text>Count:{counter}</Text>
    </View>
};

const styles = StyleSheet.create({})

export default CounterScreenWithReducer;