import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
  const [inputNumber, setInputNumber] = useState("");

  function resetNumber() {
    setInputNumber("");
  }

  function inputNumberHandler(event) {
    const newInputNumber = event.nativeEvent.text;
    setInputNumber(newInputNumber);
  }

  function confirmInputHandler() {
    console.log(typeof inputNumber);
    const chosenNumber = parseInt(inputNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Error", "you need to chose number between 1 - 99 ! ",
        [{ text: "Okay", style: "destructive", onPress: resetNumber }]) 
        return;
    }

    onPickNumber(chosenNumber)

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChange={inputNumberHandler}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.oneButtonContainer}>
          <PrimaryButton onPressHandler={resetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.oneButtonContainer}>
          <PrimaryButton onPressHandler={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.darkPurple,
    elevation: 4, //only  on android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  oneButtonContainer: {
    flex: 1,
  },
});
