import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../constants/theme";

const SubInfo = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          {data.name.first + " " + data.name.last + ", "}
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,

            color: "white",
          }}
        >
          {data.dob.age}
        </Text>
      </View>
      <Text
        style={{
          color: "white",
        }}
      >
        {data.location.country}
      </Text>
    </View>
  );
};

export default SubInfo;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    color: "#F3C5C5",
  },
  leftContainer: {
    flexDirection: "row",
  },
});
