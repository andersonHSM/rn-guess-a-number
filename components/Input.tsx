import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
} from "react-native";

interface InputProps {
  style?: StyleProp<TextStyle>;
}

const Input = (props: InputProps & TextInputProps) => {
  const [] = useState("");
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...(props.style as any) }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
