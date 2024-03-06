import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CalculationProccess = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.clearButton}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCC9DC",
    borderRadius: 20,
    marginTop: 5,
  },
  clearButton: {},
});

export default CalculationProccess;
