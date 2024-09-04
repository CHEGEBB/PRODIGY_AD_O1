import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const CalculatorDisplay = ({ expression, result }) => {
  return (
    <StyledView className="p-4 rounded-t-3xl ">
      <StyledView className="items-end">
        <StyledText className="mb-2 text-3xl text-white">{expression}</StyledText>
        <StyledText className="text-5xl font-bold text-white">{result}</StyledText>
      </StyledView>
    </StyledView>
  );
};

export default CalculatorDisplay;