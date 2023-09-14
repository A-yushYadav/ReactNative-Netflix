import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text>LoadingScreen</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
