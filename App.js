import { StyleSheet, Text, View } from "react-native";
import CalculateScreen from "./src/calculate/calculateScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CalculateScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
