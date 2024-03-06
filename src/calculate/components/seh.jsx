import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Seh = ({ addNumberPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        addNumberPressed(3);
      }}
    >
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
          style={[calculateGlobalStyles.dot, { backgroundColor: "#90EE90" }]}
        ></View>
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#90EE90" }]}
        ></View>
        <View
          style={[calculateGlobalStyles.dot, { backgroundColor: "#90EE90" }]}
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
    marginLeft: 5,
  },
});

export default Seh;
