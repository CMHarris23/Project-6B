import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');

  const flipCoin = () => {
    const options = ['Heads', 'Tails'];
    const randomIndex = Math.floor(Math.random() * 2);
    setResult(options[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coin Flip</Text>
      <Text style={styles.result}>{result ? `Result: ${result}` : 'Tap the button to flip!'}</Text>
      <Button title="Flip Coin" onPress={flipCoin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
});
