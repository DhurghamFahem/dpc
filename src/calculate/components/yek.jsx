import { View, Text, StyleSheet } from "react-native";
import React from "react";
import calculateGlobalStyles from "../styles/calculateGlobalStyles";
import { TouchableOpacity } from "react-native";

const Yek = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
