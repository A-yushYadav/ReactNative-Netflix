import {StyleSheet,Text,View,Pressable,ScrollView,Alert,} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import plans from "../data/plans";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useStripe } from "@stripe/stripe-react-native";
import { auth } from "../firebase";
import { useRoute } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";

const PlansScreen = () => {
  const [selected, setSelected] = useState([]);
  const route = useRoute();
  const email = route.params.email;
  const password = route.params.password;
  const [price, setPrice] = useState();
  console.log(selected);
  console.log(price);
  const data = plans;
  const stripe = useStripe();
  const subscribe = async() => {
    const response = await fetch("http://192.168.1.15:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(price * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      merchantDisplayName: "netflix",
      paymentIntentClientSecret: clientSecret,  
    });
     if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
     if (presentSheet.error) return Alert.alert(presentSheet.error.message);
  
    else {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log(userCredentials);
          const user = userCredentials.user;
          console.log(user.email);
        }
      );
    }
  };
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Choose the Plan that is right for you
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 6 }}>
              {" "}
              Watch all you want Ad free
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 6 }}>
              {" "}
              Recommendations just for you
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 6 }}>
              {" "}
              Cancel your plan anytime
            </Text>
          </View>
          <View style={{ marginTop: 20 }} />
          {data.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                    height: 160,
                    borderRadius: 7,
                    borderColor: "#E50914",
                    borderWidth: 2,
                    padding: 15,
                    margin: 10,
                  }
                  : {
                    height: 160,
                    borderRadius: 7,
                    borderColor: "#E50914",
                    borderWidth: 0.5,
                    padding: 15,
                    margin: 10,
                  }
              }
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Price: ₹{item.price}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "500" }}
                  >
                    video Quality:{item.videoQuality}
                  </Text>
                  <Text
                    style={{ marginTop: 3, fontSize: 16, fontWeight: "500" }}
                  >
                    Resolution:{item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={28}
                  color="black"
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>Device You can watch On:</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device, index) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={27}
                      color="#E50914"
                      key={index}
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#E50914",
            padding: 10,
            //   marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 55,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>
              selected Plan {selected}
            </Text>
          </View>
          <Pressable onPress={subscribe}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              PAY ₹{price}
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});
