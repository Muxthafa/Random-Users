import { View, Text, StyleSheet, StatusBar } from "react-native";
import StatusBarCustom from "../components/StatusBar";
import React, { useContext } from "react";
import { UsersContext } from "../store/context/user-context";
import UserImage from "../components/UserImage";
import Title from "../components/Title";
import { COLORS, SIZES, FONTS } from "../constants/theme";
import { CircleButton } from "../components/Button";

const Details = ({ route, navigation }) => {
  const usersCtx = useContext(UsersContext);
  const userId = route.params.userId;
  const selectedUser = usersCtx.users.find((user) => user.userId === userId);
  const { name, picture, location, gender, email, dob } = selectedUser;

  const labelStyles = {
    color: "#F3C5C5",
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    style: styles.label,
  };

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
      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>First Name: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{name.first}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Last Name: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{name.last}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Gender: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{gender}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>City: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{location.city}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>State: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{location.state}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Country: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>
          {location.country}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Email: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{email}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Date of Birth: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>
          {dob.date.slice(0, 10)}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Title {...labelStyles}>Age: </Title>
        <Text style={{ paddingTop: 10, color: "white" }}>{dob.age}</Text>
      </View>
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
  label: {
    marginTop: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
