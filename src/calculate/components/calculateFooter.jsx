import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CalculateFooter = ({ clearPressed }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.clearButton} onPress={clearPressed}>
        <Text style={styles.clearText}>Clear</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 5,
  },
  clearButton: {
    width: "100%",
    height: "90%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});

export default CalculateFooter;
