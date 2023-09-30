import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import grammarData from "../data/grammarData.json";

// this page explains the grammar of the quiz per level
// if user clicks a button "Prep" on the "Quiz" page, this page will be shown

const Preview = ({ route }) => {
  const { category } = route.params;

  // Retrieve the grammar data for the selected level
  const grammar = grammarData[category];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{grammar.title}</Text>
      <Text style={styles.content}>{grammar.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    margin: 20,
    textAlign: "center",
  },
});

export default Preview;
