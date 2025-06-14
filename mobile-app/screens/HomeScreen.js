import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import ProductCard from "../components/ProductCard.js";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/68499ef06ddb2e1ba7ef96c3/products") // <-- Vervang dit met je echte API-URL
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data.items)) {
          console.error("API response bevat geen 'items'-array");
          setProducts([]);
          setLoading(false);
          return;
        }

        const mapped = data.items.map((item) => {
          const product = item.product?.fieldData;
          const sku = item.skus?.[0]?.fieldData;

          return {
            id: item.product?.id,
            title: product?.name || "Geen titel",
            description: product?.description || "Geen beschrijving",
            image: sku?.["main-image"]?.url || null,
            price: sku?.price?.value ? (sku.price.value / 100).toFixed(2) : "Onbekend",
          };
        });

        setProducts(mapped);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fout bij ophalen van data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Producten worden geladen...</Text>
      </View>
    );
  }

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
