import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Deh = ({ addNumberPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addNumberPressed(10);
      }}
    >
      <Text style={calculateGlobalStyles.backgroundNumber}>10</Text>
      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
      </View>

      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={{ width: 10 }}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
      </View>

      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={{ width: 10 }}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
      </View>

      <View
        style={{
          justifyContent: "space-around",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
        <View style={[calculateGlobalStyles.dot, styles.dot]}></View>
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
    marginLeft: 5,
  },
  dot: {
    backgroundColor: "#bc544b",
  },
});

export default Deh;
