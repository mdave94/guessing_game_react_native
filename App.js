import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGamveOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  //the first element of this returned array is a boolean , eithet are loaded the fonts or not
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Apploading />;
  }

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        guessRounds={guessRounds}
        setGuessRounds={setGuessRounds}
        onGameOver={gameOverHandler}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setGamveOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGamveOver(true);
    setGuessRounds(numberOfRounds);
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#4e0329", "#ddb52f"]}
        style={styles.screensContainer}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.screensContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.screensContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screensContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
