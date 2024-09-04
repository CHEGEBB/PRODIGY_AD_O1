import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,useWindowDimensions } from 'react-native';
import CalculatorDisplay from './CalculatorDisplay';

const CalculatorUi = ({ result,expression, setExpression, setResult }) => {
  const buttons = [
    ['e', '√', '(', ')'],
    ['AC', '%', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.']
  ];
  const {width , height} = useWindowDimensions();

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
      setExpression(prev => prev + '√(');
    } else if (button === '(') {
      setExpression(prev => prev + '(');
    } else if (button === ')') {
      const openParens = (expression.match(/\(/g) || []).length;
      const closeParens = (expression.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        setExpression(prev => prev + ')');
      }
    } else if (button === '%') {
      setExpression(prev => `${prev} / 100`);
    } else {
      setExpression(prev => prev + button);
    }
  };

  const renderButton = (button, index) => {
    let buttonStyle = styles.button;
    let textStyle = styles.text;

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
    else {
      buttonStyle = [buttonStyle, styles.defaultButton];
      textStyle = [textStyle, styles.defaultButtonText];
    }

    if ( ['0', '.'].includes(button)) {
      buttonStyle = [buttonStyle, styles.zeroButton];
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
            {row.map((button, buttonIndex) => renderButton(button, `${rowIndex}-${buttonIndex}`))}
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
    width:"100%",
    padding: 10,
    flex: 1,
  },
  displayContainer: {
    backgroundColor: '#0F172A',
    padding: 10,
    
  },
  buttonContainer: {
    marginTop:-110,
    flexDirection: 'column',
    gap: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft:1,
    flex:2

  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    gap:0.1,
    width:"100%",
  },
  button: {
    width: 66,
    height: 52,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },

  },
  defaultButton: {
    backgroundColor: '#2D3748',
    color:"#F7FAFC",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 10,
  },
  operatorButton: {
    backgroundColor: '#005DB2',
  },
  equalButton: {
    backgroundColor: '#3182CE',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#B2DAFF',
    width:60,
    height:60
  },
  specialButton: {
    backgroundColor: '#93C5FD',
    color:"#1E1E1E",
    borderRadius: 30,
    width:65,

  },
  zeroButton: {
    width: 120,
    height: 50,
    backgroundColor: '#1991FF',
    borderRadius: 20,
    marginTop:3,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,

  },
  text: {
    fontSize: 20,
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
});

export default CalculatorUi;
