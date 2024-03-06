import { View, Text, StyleSheet } from "react-native";
import React from "react";
import calculateGlobalStyles from "../styles/calculateGlobalStyles";
import { TouchableOpacity } from "react-native";

const Yek = ({ addNumberPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addNumberPressed(1);
      }}
    >
      <Text style={calculateGlobalStyles.backgroundNumber}>1</Text>
      <View
        style={[calculateGlobalStyles.dot, { backgroundColor: "#CCC9DC" }]}
      ></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C1821",
    borderTopLeftRadius: 20,
  },
});

export default Yek;
