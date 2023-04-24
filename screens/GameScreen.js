import { useState ,useEffect} from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function generateRandomNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber ,onGameOver}) {
  // we need access to chosenNumber

  const firstGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(firstGuess);

  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver();
    }
  },[currentGuess,userNumber,onGameOver])

  //direction can be 'lower' or 'greater' for guessing
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "You've gave wrong answer !",
        "You should give a new aswer",
        [{ text: "Whoops", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumberBetween(
      minNumber,
      maxNumber,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            onPressHandler={nextGuessHandler.bind(this, "greater")}
          >
            {" "}
            +{" "}
          </PrimaryButton>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, "lower")}>
            {" "}
            -{" "}
          </PrimaryButton>
        </View>
      </View>
      {/* <View>Log rounds</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.yellow,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.yellow,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
