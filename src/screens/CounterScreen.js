import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = () => {
    const [count, setCount] = useState(0)
    return <View>
        <Button
            title="Increment"
            onPress={() => {
                setCount(count+1)
            }}
        />
        <Button
            title="Decrement"
            onPress={() => {
                setCount(count-1)
            }}
        />
        <Text>Count:{count}</Text>
    </View>
};

const styles = StyleSheet.create({})

export default CounterScreen;