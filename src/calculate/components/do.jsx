import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Do = ({ addNumberPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addNumberPressed(2);
      }}
    >
      <Text style={calculateGlobalStyles.backgroundNumber}>2</Text>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
          transform: [
            {
              rotate: "45deg",
            },
          ],
        }}
      >
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#bc544b" }]}
        ></View>
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#bc544b" }]}
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
    backgroundColor: "#0C1821",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});

export default Do;
