import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ROJÃO</Text>
      <Button title='Aperte o botão' onPress={() => alert('CABUM!')} />
      <Image
        source={require('./assets/Axalalala.jpg')}
        style={{ width: 200, height: 200 }}
      />
     <StatusBar style="auto" />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1572c9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})