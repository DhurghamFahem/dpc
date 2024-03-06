import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CalculationProccess = ({ removeNumberPressed, numbers }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {numbers.map((number, index) =>
          index === 0 ? (
            <TouchableOpacity
              key={index}
              style={styles.numberButton}
              onPress={() => removeNumberPressed(index)}
            >
              <Text style={styles.numberText}>{number}</Text>
            </TouchableOpacity>
          ) : (
            <View
              key={index}
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#1B2A41",
                }}
              >
                <Text
                  style={{ color: "#CCC9DC", fontSize: 20, fontWeight: "600" }}
                >
                  +
                </Text>
              </View>
              <TouchableOpacity
                key={index}
                style={styles.numberButton}
                onPress={() => removeNumberPressed(index)}
              >
                <Text style={styles.numberText}>{number}</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCC9DC",
    borderRadius: 20,
    marginTop: 5,
  },
  numberButton: {
    backgroundColor: "#324A5F",
    width: 50,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 1,
  },
  numberText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});

export default CalculationProccess;
