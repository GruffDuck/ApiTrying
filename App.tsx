import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/screens/Tabs";
import CP from "./src/screens/CP";
import Details from "./src/screens/Details";
const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Tabs" component={Tabs} />
        <stack.Screen name="CategoriedProduct" component={CP} />
        <stack.Screen name="Details" component={Details} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
