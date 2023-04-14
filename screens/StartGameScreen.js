import { View ,StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        backgroundColor:'#72063c',
        elevation:4, //only on android
        shadowColor:'black',
        shadowOffset:{width: 0, height:2},
        shadowRadius:8,
        shadowOpacity:0.5,
    }
});
