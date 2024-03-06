import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PlusSVG from "../svgs/plus";
import DetailsSvg from "../svgs/details";

const TeamCardFooter = ({ team }) => {
  return (
    <View style={styles.container}>
      <PlusSVG />
      <Text style={styles.text}>{team.score}</Text>
      <DetailsSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#324A5F",
    fontSize: 40,
    alignSelf: "center",
  },
});

export default TeamCardFooter;
