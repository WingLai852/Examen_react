import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";
import BlogCard from "../components/Blogcard.js";

export default function BlogListScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jouw-blog-api-link.com") // 👈 Vervang met je echte blog API
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          excerpt: item.excerpt || item.body?.substring(0, 100) || "Geen samenvatting",
          full: item.body,
        }));
        setBlogs(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fout bij het ophalen van blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Blogs laden...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Laatste Blogs</Text>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          excerpt={blog.excerpt}
          onPress={() => navigation.navigate("BlogDetail", blog)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
