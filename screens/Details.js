import { View, Text, StyleSheet, StatusBar } from "react-native";
import StatusBarCustom from "../components/StatusBar";
import React, { useContext } from "react";
import { UsersContext } from "../store/context/user-context";
import UserImage from "../components/UserImage";
import { COLORS } from "../constants/theme";
import { CircleButton } from "../components/Button";
import UserDetail from "../components/UserDetail";

const Details = ({ route, navigation }) => {
  const usersCtx = useContext(UsersContext);
  const userId = route.params.userId;
  const selectedUser = usersCtx.users.find((user) => user.userId === userId);
  const { name, picture, location, gender, email, dob } = selectedUser;

  return (
    <View style={styles.container}>
      <StatusBarCustom backgroundColor="black" barStyle="white" />
      <CircleButton
        icon="left"
        handlePress={() => navigation.goBack()}
        left={10}
        top={StatusBar.currentHeight + 15}
      />
      <UserImage
        source={picture.large}
        resizeMode="contain"
        style={{
          width: "80%",
          height: "50%",
        }}
      />

      <UserDetail label="First Name: ">{name.first}</UserDetail>
      <UserDetail label="Last Name: ">{name.last}</UserDetail>
      <UserDetail label="Gender: ">{gender}</UserDetail>
      <UserDetail label="City: ">{location.city}</UserDetail>
      <UserDetail label="State: ">{location.state}</UserDetail>
      <UserDetail label="Country: ">{location.country}</UserDetail>
      <UserDetail label="Email: ">{email}</UserDetail>
      <UserDetail label="Date of Birth: ">{dob.date.slice(0, 10)}</UserDetail>
      <UserDetail label="Age: ">{dob.age}</UserDetail>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
