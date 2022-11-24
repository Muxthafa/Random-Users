import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const StatusBarCustom = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default StatusBarCustom;
