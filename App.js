import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts  } from 'expo-font';
import Apploading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGamveOver] = useState(false);

  //the first element of this returned array is a boolean , eithet are loaded the fonts or not
  const [fontsLoaded]=useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  })
  
  if(!fontsLoaded){
    return <Apploading/>
  }

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
