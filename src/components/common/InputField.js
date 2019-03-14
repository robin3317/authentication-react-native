import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, keyboardType, secureTextEntry, onChangeText, value }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        style={inputStyle} 
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        autoCorrect={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    paddingTop: 5,
    paddingRight: 3
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