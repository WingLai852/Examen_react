import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const DetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../images/snowboard1.webp")}
        style={styles.image}
      />

      <Text style={styles.title}>Snowboard 1</Text>
      <Text style={styles.subtitle}>Perfect voor beginnende snowboarders</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Beschrijving:</Text>
        <Text style={styles.text}>
          Deze snowboard is ontworpen voor beginners met een stabiele vorm en makkelijk te besturen flex. Ideaal voor wie net begint op de piste.
        </Text>

        <Text style={styles.label}>Merk:</Text>
        <Text style={styles.text}>SnowPro X</Text>

        <Text style={styles.label}>Beschikbaarheid:</Text>
        <Text style={styles.text}>Op voorraad</Text>

        <Text style={styles.label}>Prijs:</Text>
        <Text style={styles.price}>€400</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Toevoegen aan winkelmandje</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetailsScreen;
