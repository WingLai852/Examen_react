import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function BlogDetailScreen({ route }) {
  const { title, image, full } = route.params;
  const displayImage = typeof image === "string" ? { uri: image } : image;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={displayImage} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{full}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
  },
});
