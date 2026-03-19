import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';


export default function DriverCard({ driver }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: driver.image }} style={styles.image} />
      <Card.Content style={{ alignItems: 'center' }}>
        <Text style={styles.name}>{driver.name}</Text>
        <Text style={styles.country}>País: {driver.country}</Text>
        <Text style={styles.description}>{driver.description}</Text>
        <Text style={styles.starsTitle}>Estrelas:</Text>
        <Text style={styles.stars}>{"⭐".repeat(driver.stars)}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    marginBottom: 20,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center'
  },
  image: {
    height: 200,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  country: {
    fontSize: 16,
    color: '#666'
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14
  },
  starsTitle: {
    fontWeight: 'bold'
  },
  stars: {
    fontSize: 18
  }
});