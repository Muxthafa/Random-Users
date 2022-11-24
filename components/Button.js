import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";

export const CircleButton = ({ icon, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3,
        ...props,
      }}
      onPress={handlePress}
    >
      <AntDesign name={icon} size={24} color="black" />
    </TouchableOpacity>
  );
};

const Button = ({ minWidth, fontSize, handlePress, style, ...props }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { minWidth: minWidth },
        style,
        { ...props },
      ]}
      onPress={handlePress}
    >
      <Text style={[{ fontSize: fontSize }, styles.buttonText]}>
        Show Details
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.large,
  },

  buttonText: {
    fontFamily: FONTS.semiBold,
    color: "white",
    textAlign: "center",
  },
});
