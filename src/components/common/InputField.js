import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label }) => {
  const { containerStyle, labelStyle } = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput style={{ height: 20, width: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {

  },
  labelStyle: {
    color: '#000',
    flex: 1,
    fontSize: 18,
    paddingLeft: 5
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40
  }
});

export { InputField };