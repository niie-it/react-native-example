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
    },
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    resultText: {
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: "center",
        fontSize: 30,
        color: 'blue'
    }
});

export const BMI = () => {
    const [weight, setWeight] = useState('0');
    const [height, setHeight] = useState('0');
    const [bmi, setBmi] = useState(0);
    const [bmiResult, setBmiResult] = useState('');

    const compute = (w, h) => {
        console.log('On pressed!');
        let weight = parseFloat(w);
        let height = parseFloat(h);
        let result = weight / Math.pow(height / 100, 2);
        setBmi(result);
        result = result.toFixed(2);
        if (result < 18.5) {
            setBmiResult('Underweight');
        }
        else if (result < 25) {
            setBmiResult('Normal weight');
        }
        else if (result < 30) {
            setBmiResult('Overweight');
        }
        else if (result >= 30) {
            setBmiResult('Obese');
        }
        else {
            setBmiResult('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>BMI Calculator</Text>
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
                    <TouchableOpacity style={styles.button}
                        onPress={() => compute(weight, height)}>
                        <Text style={styles.buttonText}>Compute</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.group}>
                    <Text style={styles.title}>BMI: {bmi.toFixed(2)}</Text>
                    <Text style={styles.resultText}>{bmiResult}</Text>
                </View>
            </View>
        </View>
    );
};