
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 3,

  },
  errorBorders: {
    borderColor: 'red'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  const errorBorder = [
    styles.container,
    error && styles.errorBorders
  ];
  // console.log('error ', error)
  return (
    <View style={errorBorder}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  )
};

export default TextInput;