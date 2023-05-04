import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextComponent,
  FlatList,
} from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstuctionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

function GameScreen({ userNumber, onGameOver }) {
  // we need access to chosenNumber

  const firstGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(firstGuess);
  const [guessRounds, setGuessRounds] = useState([firstGuess]);

  useEffect(() => {
    console.log(userNumber, currentGuess);
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  //direction can be 'lower' or 'greater' for guessing
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("You've gave wrong answer !", "You should give a new aswer", [
        { text: "Whoops", style: "cancel" },
      ]);
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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
    setCurrentGuess(newRandomNumber);
  }

  const guessArrayLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstuctionText style={styles.instuctionText}>
          Higher or lower
        </InstuctionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.oneButtonContainer}>
            <PrimaryButton
              onPressHandler={nextGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.oneButtonContainer}>
            <PrimaryButton
              onPressHandler={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessArrayLength - itemData.index}
              guess={itemData.item}
            />
          )}
          //using uniqe key
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
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
  oneButtonContainer: {
    flex: 1,
  },
  instuctionText: {
    marginBottom: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
