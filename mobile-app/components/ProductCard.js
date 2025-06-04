import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = () => {
    return (
        <View style={styles.card}>
        <Image
            source={require("../images/snowboard1.webp")}
            style={styles.image}
        />
        <Text style={styles.title}>Product Title</Text>
        <Text style={styles.description}>This is a brief description of the product.</Text>
        <Text style={styles.price}>$19.99</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 16,
        margin: 8,
        alignItems: "center",
        width: 170,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
    },
});

export default ProductCard;
