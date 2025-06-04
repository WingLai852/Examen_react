import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = () => {
    return (
        <View style={styles.card}>
        <Image
            source={require("../images/snowboard1.webp")}
            style={styles.image}
        />
        <Text style={styles.title}>snowboard1</Text>
        <Text style={styles.description}>Best snowboarder for beginners</Text>
        <Text style={styles.prijs}>Prijs</Text>
        <Text style={styles.price}>€400</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   card:{
    height: 300,
    width: 200,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
   },
   image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
   },
   title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
   },
   description: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    margin: 4,
   },
});

export default ProductCard;
