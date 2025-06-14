import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BlogCard({ title, image, excerpt, onPress }) {
  const displayImage = typeof image === "string" ? { uri: image } : image;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={displayImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.excerpt} numberOfLines={3}>
          {excerpt}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  excerpt: {
    fontSize: 14,
    color: "#666",
  },
});
