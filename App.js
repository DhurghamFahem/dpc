import HomeScreen from "./src/home/homeScreen";
import CalculateScreen from "./src/calculate/calculateScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordsScreen from "./src/records/recordsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CalculateScreen"
          component={CalculateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecordsScreen"
          component={RecordsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
