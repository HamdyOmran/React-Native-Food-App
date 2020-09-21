import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetails from "../components/ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View>
      {results.length > 0 ? <Text style={styles.titleStyle}>{title}</Text> : null}
      <FlatList
        data={results}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList);
