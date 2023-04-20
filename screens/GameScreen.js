import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

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
    color:'#ddb52f',
    textAlign:'center',
    borderWidth:2,
    borderColor:'#ddb52f',
    padding:12,

  },
});
