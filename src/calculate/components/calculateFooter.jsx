import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CalculateFooter = () => {
  return (
    <View style={styles.container}>
      <Text>CalculateFooter</Text>
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
});

export default CalculateFooter;
