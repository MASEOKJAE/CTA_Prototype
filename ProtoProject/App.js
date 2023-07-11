import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Peter');
  const [person, setPerson] = useState({name: 'mario', day: 'Sunday'});

  const clickHandler = () => {
    setName('Jack');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello {name} Parker ~</Text>
      <Text>Hi {person.name}, have a nice {person.day} </Text>
      <View style={styles.buttonContainer}>
        <Button title='updat state' onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 30,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  }
});
