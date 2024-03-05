import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import CalculationResult from "./components/calculationResult";
import CalculationProccess from "./components/calculationProccess";
import CalculationPressables from "./components/calculationPressables";
import CalculateFooter from "./components/calculateFooter";

const CalculateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalculationResult />
      <CalculationProccess />
      <CalculationPressables />
      <CalculateFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
    paddingTop: 40,
    backgroundColor: "#1B2A41",
  },
});

export default CalculateScreen;
