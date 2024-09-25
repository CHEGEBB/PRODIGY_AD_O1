import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const CalculatorComponent = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const sanitizedExpression = expression
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/√/g, 'Math.sqrt')
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/x/g, '*');

        const evalResult = eval(sanitizedExpression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '⌫') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    ['sin', 'cos', 'tan', 'log', '(', ')', '⌫', '÷'],
    ['7', '8', '9', 'x²', '√', 'π', 'e', 'x'],
    ['4', '5', '6', 'xʸ', '%', 'ln', '!', '-'],
    ['1', '2', '3', '(', ')', 'C', '=', '+'],
    ['0', '.', '±', 'EXP']
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.expressionText}>{expression}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((button) => (
                <TouchableOpacity
                  key={button}
                  style={styles.button}
                  onPress={() => handleButtonPress(button)}
                >
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
    backgroundColor: '#334155',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#1E293B',
  },
  expressionText: {
    color: '#94A3B8',
    fontSize: 24,
  },
  resultText: {
    color: '#F8FAFC',
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '11%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#475569',
    borderRadius: 10,
  },
  buttonText: {
    color: '#F8FAFC',
    fontSize: 18,
  },
});

export default CalculatorComponent;