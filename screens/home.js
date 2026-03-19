import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const [mensagem, setMensagem] = useState('ROJÃO');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mensagem}</Text>
      
      <Button 
        title="Aperte o botão"
        onPress={() => alert('CABUM!')}
      />

      <Image
        source={require('../assets/Axalalala.jpg')}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1572c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1572c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});