import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const AddTeamCard = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: "10%",
    flexDirection: "column",
    backgroundColor: "#324A5F",
    alignSelf: "center",
    margin: 5,
    padding: 5,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#CCC9DC",
    fontSize: 50,
  },
});

export default AddTeamCard;
