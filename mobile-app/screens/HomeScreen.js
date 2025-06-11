import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard.js";

export default function HomeScreen({ navigation }) {
  // This screen displays a list of snowboards available for purchase.
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose your snowboard</Text>

      <View style={styles.row}>
        <ProductCard 
          title="Snowboard 1"
          image={require("../images/snowboard1.webp")}
          description="Best snowboard for beginners"
          price="400"
          onPress={() => navigation.navigate('Details', { 
            title: "Snowboard 1",
            image: require("../images/snowboard1.webp"),
            description: "Best snowboard for beginners",
            price: "400"
           })}
        />
        <ProductCard 
          title="Snowboard 2"
          image={require("../images/snowboard2.webp")}
          description="Best snowboard for advanced riders"
          price="600"
          onPress={() => navigation.navigate('Details', { 
            title: "Snowboard 2",
            image: require("../images/snowboard2.webp"),
            description: "Best snowboard for advanced riders",
            price: "600"
          })}
        />
      </View>

      <View style={styles.row}>
        <ProductCard 
          title="Snowboard 3"
          image={require("../images/snowboard3.webp")}
          description="Best snowboard for all-mountain riding"
          price="500"
          onPress={() => navigation.navigate('Details', { 
            title: "Snowboard 3",
            image: require("../images/snowboard3.webp"),
            description: "Best snowboard for all-mountain riding",
            price: "500"
          })}
        />
        <ProductCard 
          title="Snowboard 4"
          image={require("../images/snowboard4.jpeg")}
          description="Best snowboard for freestyle riding"
          price="700"
          onPress={() => navigation.navigate('Details', { 
            title: "Snowboard 4",
            image: require("../images/snowboard4.jpeg"),
            description: "Best snowboard for freestyle riding",
            price: "700"
          })}
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
