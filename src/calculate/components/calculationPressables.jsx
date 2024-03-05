import { View, StyleSheet } from "react-native";
import React from "react";
import Yek from "./yek";
import Do from "./do";
import Seh from "./seh";
import Chehar from "./chehar";
import Penej from "./penej";
import Shesh from "./shesh";
import Hefet from "./hefet";
import Heshet from "./heshet";
import Neh from "./neh";
import Deh from "./deh";
import Yazedeh from "./yazedeh";
import Doazedeh from "./doazedeh";
import Seyezedeh from "./seyezedeh";
import Cheharedeh from "./cheharedeh";
import Panezedeh from "./panezedeh";
import Number50 from "./number50";

const CalculationPressables = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Yek />
        <Do />
        <Seh />
        <Chehar />
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Penej />
        <Shesh />
        <Hefet />
        <Heshet />
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Neh />
        <Deh />
        <Yazedeh />
        <Doazedeh />
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Seyezedeh />
        <Cheharedeh />
        <Panezedeh />
        <Number50 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#324A5F",
    borderRadius: 20,
    marginTop: 10,
  },
});

export default CalculationPressables;
