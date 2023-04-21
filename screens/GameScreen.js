import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";




function generateRandomNumberBetween(min,max,exclude) {
  const randomNumber = Math.floor(Math.random() * (max-min))+min;  

  if(randomNumber === exclude){
    return generateRandomNumberBetween(min,max,exclude);

  }else{
    return randomNumber;
  }

}


function GameScreen({userNumber}) {
// we need access to chosenNumber

  const firstGuess = generateRandomNumberBetween(1,100,userNumber)
  const [currentGuess,setCurrentGuess] = useState(firstGuess)


  
  

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text></Text>
      <View>
        <Text>Higher or lower</Text>
        {/* + - */}
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
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:Colors.yellow,
    textAlign:'center',
    borderWidth:2,
    borderColor:Colors.yellow,
    padding:12,

  },
});
