import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TeamCardFooter from "./teamCardFooter";

const TeamCard = ({ team }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{team.name}</Text>
      </View>
      <TeamCardFooter team={team} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: "25%",
    flexDirection: "column",
    backgroundColor: "#CCC9DC",
    alignSelf: "center",
    margin: 5,
    padding: 5,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#324A5F",
    fontSize: 40,
  },
});

export default TeamCard;
