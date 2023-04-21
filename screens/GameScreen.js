import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      
      {/* GUESS */}
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
