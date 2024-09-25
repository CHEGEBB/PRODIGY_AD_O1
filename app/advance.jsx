import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';

const unitConversions = {
  'kg-lb': (value) => value * 2.20462,
  'lb-kg': (value) => value / 2.20462,
  'm-ft': (value) => value * 3.28084,
  'ft-m': (value) => value / 3.28084,
  'km-mi': (value) => value * 0.621371,
  'mi-km': (value) => value / 0.621371,
};

const AdvanceCalculator = () => {
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lb');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const units = ['kg', 'lb', 'm', 'ft', 'km', 'mi'];

  const handleConvert = () => {
    const conversionKey = `${fromUnit}-${toUnit}`;
    if (unitConversions[conversionKey]) {
      const convertedValue = unitConversions[conversionKey](parseFloat(amount));
      setResult(convertedValue.toFixed(2));
    } else {
      setResult('Conversion not supported');
    }
  };

  const handleNumberPress = (num) => {
    setAmount(amount + num);
  };

  const handleClear = () => {
    setAmount('');
    setResult('');
  };

  const handleBackspace = () => {
    setAmount(amount.slice(0, -1));
  };

  const renderButton = (text, onPress, style = {}) => (
    <TouchableOpacity key={text} style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advanced Calculator</Text>
      
      <View style={styles.conversionContainer}>
        <View style={styles.unitContainer}>
          <Text style={styles.label}>From:</Text>
          <Picker
            selectedValue={fromUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setFromUnit(itemValue)}
          >
            {units.map((unit) => (
              <Picker.Item key={unit} label={unit} value={unit} />
            ))}
          </Picker>
        </View>
        
        <View style={styles.unitContainer}>
          <Text style={styles.label}>To:</Text>
          <Picker
            selectedValue={toUnit}
            style={styles.picker}
            onValueChange={(itemValue) => setToUnit(itemValue)}
          >
            {units.map((unit) => (
              <Picker.Item key={unit} label={unit} value={unit} />
            ))}
          </Picker>
        </View>
      </View>

      <TextInput
        style={[styles.input, { backgroundColor: '#1f2937', color: '#fff' }]}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor="#9ca3af"
      />

      <Text style={styles.result}>Result: {result}</Text>

      <View style={styles.buttonContainer}>
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((num) => (
          renderButton(num, () => handleNumberPress(num), styles.numberButton)
        ))}
        {renderButton('AC', handleClear, styles.functionButton)}
        {renderButton('⌫', handleBackspace, styles.functionButton)}
        {renderButton('=', handleConvert, styles.equalButton)}
      </View>
      <StatusBar style="light" backgroundColor="#0f172a" barStyle="light-content" translucent={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#334155',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  conversionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  unitContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  picker: {
    backgroundColor: '#1f2937',
    borderRadius: 8,
    color: '#fff',
  },
  input: {
    backgroundColor: '#1f2937',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    color: '#fff ',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    color: '#4a90e2',
    backgroundColor:'#1f2937',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '23%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0891b2',
    borderRadius: 5,
    marginBottom: 10,
  },
  numberButton: {
    backgroundColor: '#0891b2',
    color: '#fff',
  },
  functionButton: {
    backgroundColor: '#2563eb',
    color: '#fff',
  },
  equalButton: {
    backgroundColor: '#4a90e2',
    color: '#fff',

  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default AdvanceCalculator;