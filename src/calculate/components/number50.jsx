import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Number50 = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>50</Text>
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
    borderBottomRightRadius: 20,
    marginTop: 5,
    marginLeft: 5,
  },
  text: {
    color: "#CCC9DC",
    fontSize: 50,
    fontWeight: "800",
  },
});

export default Number50;
