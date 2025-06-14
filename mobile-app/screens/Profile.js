import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function ProfileScreen() {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../images/avatar.png")} // Gebruik lokale afbeelding correct
        style={[styles.avatar, { transform: [{ scale: scaleAnim }] }]}
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
    backgroundColor: "#f2f2f2",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  infoSection: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
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
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
