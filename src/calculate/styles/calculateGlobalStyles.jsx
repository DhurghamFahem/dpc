import { StyleSheet } from "react-native";

export default calculateGlobalStyles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  backgroundNumber: {
    position: "absolute",
    color: "#CCC9DC",
    fontSize: 80,
    opacity: 0.2,
  },
});
