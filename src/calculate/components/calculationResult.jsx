import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CalculationResult = ({ numbers }) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C1821",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 100,
  },
});

export default CalculationResult;
