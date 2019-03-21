import React from "react";
import { View, Text } from "react-native";
import { Color, Bold, Regular, Light, BgColor } from "../Utiles/variables";

export const Header = props => {
  return (
    <View
      style={{
        height: 100,
        paddingTop: 20,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        ...BgColor
      }}
    >
      <Text style={{ fontSize: 25, ...Bold }}>{props.header}</Text>
    </View>
  );
};
