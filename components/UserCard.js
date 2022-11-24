import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import SubInfo from "./SubInfo";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import UserImage from "./UserImage";

const UserCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <UserImage
          source={data.picture.large}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <SubInfo data={data} />
        <View style={styles.button}>
          <Button
            minWidth={120}
            fontSize={SIZES.font}
            style={{ backgroundColor: COLORS.moss }}
            handlePress={() =>
              navigation.navigate("Details", { userId: data.userId })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.small,
    elevation: 20,
    shadowColor: "black",
  },
  innerContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    backgroundColor: "#181818",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
