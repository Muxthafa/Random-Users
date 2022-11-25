import { View, Text, StyleSheet } from "react-native";
import Title from "./Title";
import { SIZES, FONTS } from "../constants/theme";

const UserDetail = ({ label, children }) => {
  const labelStyles = {
    color: "#F3C5C5",
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    style: styles.label,
  };
  return (
    <View style={styles.detailsContainer}>
      <Title {...labelStyles}>{label}</Title>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: SIZES.medium,
  },
});
