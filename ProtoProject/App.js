import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'James', key: '1' },
    { name: 'Suyun', key: '2' },
    { name: 'Dongsu', key: '3' },
    { name: 'Peter', key: '4' },
    { name: 'Julia', key: '5' },
    { name: 'Yunmin', key: '6' },
    { name: 'Seokjae', key: '7' },
    { name: 'Heewon', key: '8' },
  ])
  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <Text style={(styles.mapItem)}>{item.name}</Text>
        )}/>
      
      {/* 위 아래 같은 기능 다른 모습 */}
      {/* <ScrollView>
        { people.map(item => (
          <View key={item.key}>
            <Text style={styles.mapItem}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

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
  }
});
