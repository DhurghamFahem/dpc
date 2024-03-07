import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RecordsHeader = ({ teamName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{teamName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#324A5F",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  text: {
    color: "#CCC9DC",
    fontSize: 30,
    fontWeight: "600",
  },
});

export default RecordsHeader;
