import { View, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Title from "./Title";
import { COLORS, SIZES, FONTS } from "../constants/theme";

const UsersHeader = () => {
  return (
    <View style={styles.container}>
      <Title color="white" fontFamily={FONTS.bold} fontSize={SIZES.extraLarge}>
        Random Users
      </Title>

      <View>
        <Ionicons name="person" size={36} color="white" />
      </View>
    </View>
  );
};

export default UsersHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 15,
  },
  icon: {
    borderRadius: 24,
    padding: 6,
    backgroundColor: COLORS.moss,
  },
});
