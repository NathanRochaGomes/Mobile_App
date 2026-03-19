import { ScrollView, StyleSheet, Text, View } from "react-native";
import { drivers } from "./data/drivers.js";
import { Provider } from "react-native-paper";
import DriverCard from "./components/DriverCard"; 

export default function App() {
  return (
    <Provider>
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <View style={styles.container}>
          <Text style={styles.title}>Super Trunfo F1</Text>
          {drivers.map((item, index) => (
            <DriverCard key={index} driver={item} />
          ))}
          
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#333'
  }
});