import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import Card from "../components/Card";
import colors from "../contants/colors";
import Input from "../components/Input";

const StartGameScreen = (props: any) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (inputText: string) => {
    const validValue = inputText.replace(/\D/g, "");
    setEnteredValue(validValue);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!s</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            multiline
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={colors.accent} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    width: "40%",
    textAlign: "center",
  },
});

export default StartGameScreen;
