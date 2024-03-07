import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CalculateFooter = ({ clearPressed, savePressed }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.clearButton} onPress={clearPressed}>
        <Text style={styles.clearText}>Clear</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={savePressed}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    marginTop: 5,
    flexDirection: "row",
  },
  clearButton: {
    width: "50%",
    height: "90%",
    backgroundColor: "#bc544b",
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  saveButton: {
    width: "50%",
    height: "90%",
    backgroundColor: "#90EE90",
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});

export default CalculateFooter;
