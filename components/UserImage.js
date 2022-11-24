import { Image } from "react-native";
import React from "react";

const UserImage = ({ source, resizeMode, style }) => {
  return (
    <Image
      source={{ uri: source }}
      resizeMode={resizeMode}
      style={[
        {
          width: "100%",
          height: "100%",
        },
        style,
      ]}
    />
  );
};

export default UserImage;
