import { Text } from "react-native";
import React from "react";

const Title = ({ children, color, fontFamily, fontSize, style, ...props }) => {
  return (
    <Text
      style={[
        { color: color, fontFamily: fontFamily, fontSize: fontSize },
        style,
        { ...props },
      ]}
    >
      {children}
    </Text>
  );
};

export default Title;
