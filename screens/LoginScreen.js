import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  console.log(input);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoading(false);
      }
      if (user) {
        navigation.navigate("Profile");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, input, password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log("loggined with :", user.email);
      }
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        {loading ? (
          <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
            <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"500"}}>Loading</Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ) : (
          <>
            <View
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Image
                style={{ height: 50, width: 120, marginTop: 20 }}
                source={{
                  uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                }}
              />
            </View>
            <View style={{ width: 330, marginTop: 45 }}>
              <Input
                value={input}
                onChangeText={(text) => setInput(text)}
                type="email"
                placeholder="Email"
                placeholderTextColor={"white"}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 15,
                  color: "white",
                  backgroundColor: "grey",
                }}
              />

              <Input
                value={password}
                onChangeText={(text) => setPassword(text)}
                type="password"
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"white"}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 15,
                  color: "white",
                  backgroundColor: "grey",
                }}
              />
            </View>

            <Pressable
              onPress={signIn}
              style={
                password.length > 4
                  ? {
                      width: 300,
                      backgroundColor: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 14,
                    }
                  : {
                      width: 300,
                      marginLeft: "auto",
                      marginRight: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "white",
                      borderWidth: 2,
                      padding: 14,
                    }
              }
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 19,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Signin
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 19,
                  fontWeight: "600",
                  color: "white",
                  marginTop: 15,
                }}
              >
                New to Netflix? sign up{" "}
              </Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
