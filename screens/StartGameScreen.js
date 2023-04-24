import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstuctionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
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
      Alert.alert("Error", "you need to chose number between 1 - 99 ! ", [
        { text: "Okay", style: "destructive", onPress: resetNumber },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstuctionText>Enetr your tipp</InstuctionText>
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
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
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
