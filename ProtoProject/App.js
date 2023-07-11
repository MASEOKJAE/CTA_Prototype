import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';

export default function App() {
  const [mainFunc, setMainFunc] = useState([
    { text: 'QR Code 인식', key: '1' },
    { text: '기기 온도 체크', key: '2' }
  ]);

  const pressHandler = (key) => {

  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.separator} />
      <View style={styles.content}>
        {/* to from */}
        <View style={styles.list}>
          <FlatList
          data={mainFunc}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
               <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>{item.text}</Text>
                </View>
            </TouchableOpacity>
          )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  mapItem: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'skyblue',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 10
  },
  buttonContainer: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  separator: {
    height: 2,
    backgroundColor: "#ccc",
    marginVertical: 10,
  }
});
