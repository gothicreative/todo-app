import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hi there this tis from index .</Text>
     </View>
  );
}
  
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    margin: 40,
  },
});