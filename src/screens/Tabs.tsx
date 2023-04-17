import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "./Products";
import Details from "./Details";
import { Product } from "../component/Types/Type";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import DEneme from "../../DEneme";
import useProducts from "../Hooks/useProducts";
import CP from "./CP";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="category" size={22} color={"lightblue"} />
          ),
        }}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Feather name="shopping-bag" size={22} color="lightblue" />
          ),
        }}
        name="Products"
        component={Products}
      />
    </Tab.Navigator>
  );
};
export type RootStackParamList = {
  Categories: {
    category: string;
  };
  Products: {
    item: Product;
  };
  Details: { product: Product };
  Deneme: {
    naem: Product;
  };
  CategoriedProduct: {
    name: string;
  };
};

export default Tabs;
