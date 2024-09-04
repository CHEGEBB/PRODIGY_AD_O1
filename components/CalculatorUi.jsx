import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';

const CalculatorUi = ({ result, expression, setExpression, setResult }) => {
  const buttons = [
    ['e', '√', '(', ')'],
    ['AC', '%', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.'],
  ];

  const { width, height } = useWindowDimensions();

  const buttonWidth = width * 0.2; 
  const buttonHeight = buttonWidth * 0.75; 
  const zeroButtonWidth = buttonWidth * 2.2; 

  const handleButtonPress = (button) => {
    if (button === 'AC') {
      setExpression('');
      setResult('');
    } else if (button === '=') {
      try {
        const formattedExpression = expression
          .replace(/√/g, 'Math.sqrt')
          .replace(/%/g, '/100');
        setResult(eval(formattedExpression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (button === '√') {
      setExpression((prev) => prev + '√(');
    } else if (button === '(') {
      setExpression((prev) => prev + '(');
    } else if (button === ')') {
      const openParens = (expression.match(/\(/g) || []).length;
      const closeParens = (expression.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        setExpression((prev) => prev + ')');
      }
    } else if (button === '%') {
      setExpression((prev) => `${prev} / 100`);
    } else {
      setExpression((prev) => prev + button);
    }
  };

  const renderButton = (button, index) => {
    let buttonStyle = [styles.button, styles.defaultButton, { width: buttonWidth, height: buttonHeight }];
    let textStyle = styles.defaultButtonText;

    if (['='].includes(button)) {
      buttonStyle = [buttonStyle, styles.equalButton];
      textStyle = [textStyle, styles.equalButtonText];
    } else if (['+', '-', '*', '/'].includes(button)) {
      buttonStyle = [buttonStyle, styles.operatorButton];
      textStyle = [textStyle, styles.operatorButtonText];
    } else if (['AC', '%'].includes(button)) {
      buttonStyle = [buttonStyle, styles.clearButton];
      textStyle = [textStyle, styles.clearButtonText];
    } else if (['e', '√', '(', ')'].includes(button)) {
      buttonStyle = [buttonStyle, styles.specialButton];
      textStyle = [textStyle, styles.specialButtonText];
    }

    if (['0'].includes(button)) {
      buttonStyle = [buttonStyle, { width: zeroButtonWidth }];
      textStyle = [textStyle, styles.zeroButtonText];
    }

    return (
      <TouchableOpacity
        key={index}
        style={buttonStyle}
        onPress={() => handleButtonPress(button)}
      >
        <Text style={textStyle}>{button}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button, buttonIndex) =>
              renderButton(button, `${rowIndex}-${buttonIndex}`)
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334155',
    borderRadius: 40,
    overflow: 'hidden',
    width: '100%',
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    marginTop: -110,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  defaultButton: {
    backgroundColor: '#1E293B',
    color: '#F7FAFC',
  },
  operatorButton: {
    backgroundColor: '#005DB2',
  },
  equalButton: {
    backgroundColor: '#3182CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#B2DAFF',
  },
  specialButton: {
    backgroundColor: '#93C5FD',
  },
  zeroButton: {
    backgroundColor: '#1991FF',
  },
  text: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  defaultButtonText: {
    color: '#F7FAFC', 
  },
  operatorButtonText: {
    color: '#F7FAFC',
  },
  equalButtonText: {
    color: '#FFFFFF',
  },
  clearButtonText: {
    color: '#2D3748',
  },
  specialButtonText: {
    color: '#1E1E1E',
  },
  zeroButtonText: {
    color: '#F7FAFC',
  },
});

export default CalculatorUi;
