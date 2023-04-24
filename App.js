import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGamveOver] = useState(false);

  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} />;
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen/>
  }

  function gameOverHandler(){
    console.log(' GAME OVER ')
    setGamveOver(true)
  }

 
  return (
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
