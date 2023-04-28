import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GamveOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> round to the number
        <Text style={styles.highlight}>{userNumber}</Text>{" "}
      </Text>

      <PrimaryButton onPressHandler={onStartNewGame}> New game </PrimaryButton>
    </View>
  );
}

export default GamveOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.yellow,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow,
  },
});
