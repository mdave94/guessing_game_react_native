import { Text, View,StyleSheet,Image } from "react-native";
import Colors from "../constants/colors";

function GamveOverScreen() {
  return (
    <View>
      <Text>GAME OVER </Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GamveOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.yellow,
    overflow: "hidden",
    margin:36,
  },
});
