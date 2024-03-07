import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CalculationResult from "./components/calculationResult";
import CalculationProccess from "./components/calculationProccess";
import CalculationPressables from "./components/calculationPressables";
import CalculateFooter from "./components/calculateFooter";
import storage from "../../data/storage";
import uuid from "react-native-uuid";

const CalculateScreen = ({ route, navigation }) => {
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
    const index = route.params.teams
      .map((c) => c.id)
      .indexOf(route.params.team.id);

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const obj = { id: uuid.v4(), score: sum };

    route.params.team.score = sum + route.params.team.score;
    route.params.team.records = [obj, ...route.params.team.records];
    route.params.teams[index] = route.params.team;
    storage.save({
      key: "teams",
      data: route.params.teams,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CalculationResult numbers={numbers} defaultValue={0} />
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
