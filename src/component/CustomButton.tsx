import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type CustomButtonProps = {
  style?: any;
  onPress?: () => void;
  title?: string;
  titleStyle?: any;
};
const CustomButton = (props: CustomButtonProps) => {
  const { style, onPress, title, titleStyle } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
