import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ProductCard from "../components/ProductCard.js";
import BlogCard from "../components/BlogCard.js";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [blogs] = useState([
    {
      id: "1",
      title: "Top 5 beginner snowboards",
      image: require("../images/snowboard4.jpeg"),
      excerpt: "Nieuw op de piste? Ontdek de beste snowboards om mee te beginnen.",
      full: "Volledige tekst blog 1...",
    },
    {
      id: "2",
      title: "Hoe kies je de juiste snowboots?",
      image: require("../images/snowboard4.jpeg"),
      excerpt: "Comfort en grip zijn belangrijk. Hier lees je waar je op moet letten.",
      full: "Volledige tekst blog 2...",
    },
    {
      id: "3",
      title: "Snowboard onderhoudstips",
      image: require("../images/snowboard4.jpeg"),
      excerpt: "Met deze tips blijft je board langer goed – waxen, slijpen, en meer!",
      full: "Volledige tekst blog 3...",
    },
  ]);

  useEffect(() => {
    fetch(" https://api.webflow.com/v2/sites/68499ef06ddb2e1ba7ef96c3/products", {
      headers: {
        Authorization: "Bearer 738a64c08cf9ceb02edb04e8ce11cbd47fd03fb078428eee5617ae7547b9d149", // vervang dit met jouw token
        "accept-version": "1.0.0",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data.items)) {
          console.error("API response bevat geen 'items'-array");
          setProducts([]);
          return;
        }

        const mapped = data.items.map((item) => {
          const product = item.product?.fieldData;
          const sku = item.skus?.[0]?.fieldData;
          return {
            id: item.product?.id,
            title: product?.name || "Geen naam",
            description: product?.description || "Geen beschrijving",
            image: { uri: sku?.["main-image"]?.url },
            price: sku?.price?.value ? (sku.price.value / 100).toFixed(2) : "0.00",
          };
        });

        setProducts(mapped);
      })
      .catch((error) => {
        console.error("Fout bij ophalen van producten:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate("Cart")}>
        <Ionicons name="cart-outline" size={28} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileHeader} onPress={() => navigation.navigate("Profiel")}>
        <Image source={require("../images/avatar.png")} style={styles.avatar} />
        <Text style={styles.welcome}>Welkom terug, Rocky!</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <View style={styles.row}>
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                onPress={() => navigation.navigate("Details", product)}
              />
            ))}
          </View>

          <View style={styles.row}>
            {products.slice(2, 4).map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                onPress={() => navigation.navigate("Details", product)}
              />
            ))}
          </View>
        </>
      )}

      <Text style={styles.title}>Laatste blogs</Text>

      <View style={styles.blogSection}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            excerpt={blog.excerpt}
            onPress={() => navigation.navigate("BlogDetail", blog)}
          />
        ))}
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
  blogSection: {
    marginBottom: 30,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  welcome: {
    fontSize: 18,
    fontWeight: "600",
  },
  cartIcon: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
});
