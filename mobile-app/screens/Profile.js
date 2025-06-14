import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "./images/avatar.png" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Rocky Lai</Text>
      <Text style={styles.email}>rocky@example.com</Text>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Lid sinds:</Text>
        <Text style={styles.value}>Januari 2023</Text>
        <Text style={styles.label}>Favoriete sport:</Text>
        <Text style={styles.value}>Snowboarden</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log uit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  infoSection: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#999",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
