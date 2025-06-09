import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ title, image, description, subtitle, price, onPress }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.prijs}>{price}</Text>

        <TouchableOpacity 
                style={styles.button}
                onPress={onPress}
                >
                <Text style={styles.buttonText}>Bekijk product</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
   card:{
    height: 350,
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

     button: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default ProductCard;
