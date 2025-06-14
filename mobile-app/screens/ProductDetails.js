import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

const DetailsScreen = ({ route }) => {
  const { title, description, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const numericPrice = Number(price);
  const total = (numericPrice * quantity).toFixed(2);

  // Ondersteuning voor zowel local require als { uri: ... }
  const displayImage =
    typeof image === "number" ? image : { uri: image };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={displayImage} style={styles.image} />

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.price}>€ {numericPrice.toFixed(2)}</Text>
      </ScrollView>

      <View style={styles.bottomSection}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.totalText}>Totaal: € {total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 20,
  },
  bottomSection: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fafafa",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  totalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
