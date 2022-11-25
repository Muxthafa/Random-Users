import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { UsersContext } from "../store/context/user-context";
import React, { useEffect, useContext, useState } from "react";
import StatusBarCustom from "../components/StatusBar";
import UsersHeader from "../components/UsersHeader";
import UserCard from "../components/UserCard";
import { COLORS } from "../constants/theme";
import { userApi } from "../constants/api";

export default function HomeScreen() {
  const usersCtx = useContext(UsersContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const usersData = usersCtx.users;

  const fetchUser = async () => {
    try {
      const response = await fetch(userApi);
      const result = await response.json();
      let userNames = result.results.map((item) => {
        const id = new Date().toString() + Math.random().toString();
        return { userId: id, ...item };
      });
      usersCtx.addUsers(userNames);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return (
      <View style={styles.loadingIndicator}>
        <Text>Something went wrong!</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

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
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
