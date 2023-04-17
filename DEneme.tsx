import { View, Text } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./src/screens/Tabs";
import { Product } from "./src/component/Types/Type";

const DEneme = (
  props: StackScreenProps<RootStackParamList, "Deneme">,
  items: Product
) => {
  const name = props.route.params.naem;
  return (
    <View>
      <Text>{name.category}</Text>
    </View>
  );
};

export default DEneme;
