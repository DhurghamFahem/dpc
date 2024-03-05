import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Do = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
    marginLeft: 5,
  },
});

export default Do;
