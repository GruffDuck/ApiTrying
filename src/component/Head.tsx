import { View, Text, StyleSheet } from "react-native";
import React from "react";
type Props = {
  text: string;
};
const Head = (props:Props) => {
  const { text } = props;
  return (
    <View style={styles.headContainer}>
      <Text style={styles.headerTxt}>{text}</Text>
    </View>
  );
};

export default Head;
const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "white",
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  headerTxt: {
    top: 10,
    fontSize: 25,
    fontWeight: "400",
  },
});
