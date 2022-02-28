import React, { useState } from "react";
import {
    View, StyleSheet,
    Text, TextInput,
    TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },
    group: {
        marginTop: 20
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 30
    },
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1
    },
    title: {
        fontSize: 20
    },
    center: {
        alignItems: 'center'
    }
});

export const BMI = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const compute = () => {
        console.log('On pressed!');
        let weight = parseFloat(weight);
        let height = parseFloat(height);
        setBmi(weight / Math.pow(height / 100, 2));
    }

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <Text style={styles.title}>Weight (KG)</Text>
                <TextInput style={styles.input}
                    keyboardType='numeric'
                    value={weight}
                    onChangeText={(w) => setWeight(w)} />
            </View>
            <View style={styles.group}>
                <Text style={styles.title}>Height (CM)</Text>
                <TextInput style={styles.input}
                    keyboardType='numeric'
                    value={height}
                    onChangeText={(h) => setHeight(h)}
                />
            </View>
            <View style={styles.center}>
                <View style={styles.group}>
                    <Text style={styles.title}>BMI: {bmi.toFixed(2)}</Text>
                </View>
                <View style={styles.group}>
                    <TouchableOpacity style={styles.button}
                        onPress={compute}>
                        <Text style={styles.buttonText}>Compute</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};