import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
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
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
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
        disabled={!input && !password}
        onPress={()=> navigation.navigate("Plan",{
            email:input,
            password:password,
        })}
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
            Register
          </Text>
        </Pressable>

        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
