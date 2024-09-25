import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const CalculatorModal = ({ visible, onClose, title, children }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{title}</Text>
        <ScrollView>
          {children}
        </ScrollView>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </Modal>
);

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    const rate = 0.85;
    setResult((parseFloat(amount) * rate).toFixed(2));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter USD amount"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.calcButton} onPress={convertCurrency}>
        <Text style={styles.calcButtonText}>Convert to EUR</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Result: €{result}</Text>
    </View>
  );
};

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateInterest = () => {
    const interest = (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;
    setResult(interest.toFixed(2));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={principal}
        onChangeText={setPrincipal}
        placeholder="Principal amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={rate}
        onChangeText={setRate}
        placeholder="Interest rate (%)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Time (years)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.calcButton} onPress={calculateInterest}>
        <Text style={styles.calcButtonText}>Calculate Interest</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Interest: ${result}</Text>
    </View>
  );
};

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [result, setResult] = useState('');

  const calculateLoan = () => {
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    const monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(monthlyPayment.toFixed(2));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Loan amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={rate}
        onChangeText={setRate}
        placeholder="Interest rate (%)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={term}
        onChangeText={setTerm}
        placeholder="Loan term (years)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.calcButton} onPress={calculateLoan}>
        <Text style={styles.calcButtonText}>Calculate Monthly Payment</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Monthly Payment: ${result}</Text>
    </View>
  );
};

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [result, setResult] = useState('');

  const calculateTip = () => {
    const tip = (parseFloat(billAmount) * parseFloat(tipPercentage)) / 100;
    setResult(tip.toFixed(2));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={billAmount}
        onChangeText={setBillAmount}
        placeholder="Bill amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={tipPercentage}
        onChangeText={setTipPercentage}
        placeholder="Tip percentage"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.calcButton} onPress={calculateTip}>
        <Text style={styles.calcButtonText}>Calculate Tip</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>Tip amount: ${result}</Text>
    </View>
  );
};

const Financial = () => {
  const [modalVisible, setModalVisible] = useState({
    currency: false,
    interest: false,
    loan: false,
    tip: false,
  });

  const openModal = (calculator) => {
    setModalVisible({ ...modalVisible, [calculator]: true });
  };

  const closeModal = (calculator) => {
    setModalVisible({ ...modalVisible, [calculator]: false });
  };

  const renderCalculatorButton = (title, calculator) => (
    <TouchableOpacity
      style={styles.calculatorButton}
      onPress={() => openModal(calculator)}
    >
      <Text style={styles.calculatorButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderCalculatorButton('Currency Converter', 'currency')}
      {renderCalculatorButton('Interest Calculator', 'interest')}
      {renderCalculatorButton('Loan Calculator', 'loan')}
      {renderCalculatorButton('Tip Calculator', 'tip')}

      <CalculatorModal
        visible={modalVisible.currency}
        onClose={() => closeModal('currency')}
        title="Currency Converter"
      >
        <FontAwesome name="money" size={24} color="black" />
        <CurrencyConverter />
      </CalculatorModal>

      <CalculatorModal
        visible={modalVisible.interest}
        onClose={() => closeModal('interest')}
        title="Interest Calculator"
      >
        <InterestCalculator />
      </CalculatorModal>

      <CalculatorModal
        visible={modalVisible.loan}
        onClose={() => closeModal('loan')}
        title="Loan Calculator"
      >
        <LoanCalculator />
      </CalculatorModal>

      <CalculatorModal
        visible={modalVisible.tip}
        onClose={() => closeModal('tip')}
        title="Tip Calculator"
      >
        <TipCalculator />
      </CalculatorModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e293b',
  },
  calculatorButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  calculatorButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#e4e4e7',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  calcButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  calcButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Financial;