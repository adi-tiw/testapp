import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { fetchMessage } from "../api";  // Import from api.ts

export default function HomeScreen() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    try {
      const data = await fetchMessage();
      setMessage(data.message);
    } catch (error) {
      setMessage("Failed to fetch data");
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || "Loading..."}</Text>
      <Button title="Refresh" onPress={getMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, marginBottom: 20 },
});