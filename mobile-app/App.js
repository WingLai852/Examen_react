import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Mobile App!</Text>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  productColumn: {
    flex: 1,
    alignItems: "center",
  },
});
