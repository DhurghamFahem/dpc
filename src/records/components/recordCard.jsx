import { View, Text, StyleSheet } from "react-native";
import React from "react";
import EditSVG from "../svgs/edit";
import DeleteSVG from "../svgs/delete";

const RecordCard = ({ record, editPressed, deletePressed }) => {
  return (
    <View style={styles.container}>
      <EditSVG onPress={editPressed} />
      <Text style={styles.title}>{record.score}</Text>
      <DeleteSVG onPress={deletePressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 110,
    flexDirection: "column",
    backgroundColor: "#CCC9DC",
    alignSelf: "center",
    margin: 5,
    padding: 5,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#324A5F",
    fontSize: 50,
  },
});

export default RecordCard;
