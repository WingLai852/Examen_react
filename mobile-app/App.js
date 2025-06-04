import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Mobile App!</Text>

      <View style={styles.row}>
        <ProductCard />
        <ProductCard />
      </View>

      <View style={styles.row}>
        <ProductCard />
        <ProductCard />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  productColumn: {
    flex: 1,
    alignItems: "center",
  },
});
