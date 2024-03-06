import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Penej = ({ addNumberPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addNumberPressed(5);
      }}
    >
      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#52b2bf" }]}
        ></View>
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#52b2bf" }]}
        ></View>
      </View>
      <View
        style={[calculateGlobalStyles.dot, { backgroundColor: "#52b2bf" }]}
      ></View>
      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#52b2bf" }]}
        ></View>
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#52b2bf" }]}
        ></View>
      </View>
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
    marginTop: 5,
  },
});

export default Penej;
