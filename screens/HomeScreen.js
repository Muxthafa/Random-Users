import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useContext } from "react";
import { COLORS } from "../constants/theme";

import StatusBarCustom from "../components/StatusBar";
import UsersHeader from "../components/UsersHeader";
import UserCard from "../components/UserCard";
import { UsersContext } from "../store/context/user-context";

export default function HomeScreen() {
  const usersCtx = useContext(UsersContext);
  const usersData = usersCtx.users;

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const result = await response.json();
      let userNames = result.results.map((item) => {
        const id = new Date().toString() + Math.random().toString();
        return { userId: id, ...item };
      });
      usersCtx.addUsers(userNames);
    }
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarCustom backgroundColor="black" barStyle="white" />

      <View style={{ flex: 0 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={usersData}
            renderItem={({ item }) => <UserCard data={item} />}
            keyExtractor={(item) => item.userId}
            ListHeaderComponent={<UsersHeader />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.backgroundStyle}>
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
});
