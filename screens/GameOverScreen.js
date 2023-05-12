import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GamveOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER </Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to the number
          <Text style={styles.highlight}>{userNumber}</Text>{" "}
        </Text>

        <PrimaryButton onPressHandler={onStartNewGame}>New game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GamveOverScreen;

//const deviceWidth = Dimensions.get("window").width;
//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    /*   width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150, */
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
    color: Colors.purple,
  },
});
