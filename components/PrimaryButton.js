import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressHandler }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable // pressed here is default param in Pressable component
        style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer}
        onPress={onPressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
