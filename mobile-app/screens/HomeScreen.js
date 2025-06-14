import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ProductCard from "../components/ProductCard.js";
import BlogCard from "../components/BlogCard.js";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [products] = useState([
    {
      id: "1",
      title: "Snowboard Alpha",
      description: "Perfect for beginners on all slopes",
      image: require("../images/snowboard1.webp"),
      price: "400.00",
    },
    {
      id: "2",
      title: "Snowboard Beta",
      description: "Great control for advanced riders",
      image: require("../images/snowboard2.webp"),
      price: "600.00",
    },
    {
      id: "3",
      title: "Snowboard Gamma",
      description: "All-mountain versatility",
      image: require("../images/snowboard3.webp"),
      price: "500.00",
    },
    {
      id: "4",
      title: "Snowboard Freestyle",
      description: "Great for park and tricks",
      image: require("../images/snowboard4.jpeg"),
      price: "700.00",
    },
  ]);

  const [blogs] = useState([
    {
      id: "1",
      title: "Top 5 beginner snowboards",
      image: require("../images/snowboard4.jpeg"),
      excerpt:
        "Nieuw op de piste? Ontdek de beste snowboards om mee te beginnen.",
      full: "Volledige tekst blog 1...",
    },
    {
      id: "2",
      title: "Hoe kies je de juiste snowboots?",
      image: require("../images/snowboard4.jpeg"),
      excerpt:
        "Comfort en grip zijn belangrijk. Hier lees je waar je op moet letten.",
      full: "Volledige tekst blog 2...",
    },
    {
      id: "3",
      title: "Snowboard onderhoudstips",
      image: require("../images/snowboard4.jpeg"),
      excerpt:
        "Met deze tips blijft je board langer goed – waxen, slijpen, en meer!",
      full: "Volledige tekst blog 3...",
    },
  ]);

 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate("Cart")}>
        <Ionicons name="cart-outline" size={28} color="#333" />
      </TouchableOpacity>
    <TouchableOpacity
  style={styles.profileHeader}
  onPress={() => navigation.navigate("Profiel")}
>
  <Image
    source={require("../images/avatar.png")}
    style={styles.avatar}
  />
  <Text style={styles.welcome}>Welkom terug, Rocky!</Text>
</TouchableOpacity>

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
