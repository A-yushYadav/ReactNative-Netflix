import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ProfileContext } from "./Context";

const STRIPE_KEY =
  "pk_test_51NpFN2SEPd08J1iTJLJhiWXUqV3qtZ5PgL1GQRDHEsQIxRdw5yJjcY7xtEUynhCRz314buxuTOtnD5yLrV4Sh6fs005Lg6vFyN";
export default function App() {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey={STRIPE_KEY}>
          <StackNavigator />
          <StatusBar style="light" />
        </StripeProvider>
      </ProfileContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
