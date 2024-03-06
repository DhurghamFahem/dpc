import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CalculationResult from "./components/calculationResult";
import CalculationProccess from "./components/calculationProccess";
import CalculationPressables from "./components/calculationPressables";
import CalculateFooter from "./components/calculateFooter";

const CalculateScreen = ({ route }) => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = (number) => {
    setNumbers((prevNumbers) => {
      return [number, ...prevNumbers];
    });
  };

  const removeNumber = (index) => {
    setNumbers((prevNumbers) => {
      return prevNumbers.filter((value, idx) => idx != index);
    });
  };

  const clearNumbers = () => {
    setNumbers([]);
  };

  const save = () => {
    setNumbers([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CalculationResult
        numbers={numbers}
        defaultValue={route.params.team.score}
      />
      <CalculationProccess
        removeNumberPressed={removeNumber}
        numbers={numbers}
      />
      <CalculationPressables addNumberPressed={addNumber} />
      <CalculateFooter clearPressed={clearNumbers} savePressed={save} />
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
