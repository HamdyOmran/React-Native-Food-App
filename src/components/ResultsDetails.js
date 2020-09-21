import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.resultStyle}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
  },
  resultStyle:{
      marginLeft:15,
      marginVertical:10
  }
});

export default ResultDetails;
