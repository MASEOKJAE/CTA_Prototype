import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

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
  ]);

  // pressHandler 함수가 호출되면, key 값을 매개변수로 전달받습니다.
  // setPeople 함수를 호출하여 이전 people 배열을 업데이트합니다. setPeople 함수는 이전 상태(prevPeople)를 매개변수로 받는 콜백 함수를 인자로 받습니다.
  // 콜백 함수에서는 prevPeople 배열을 필터링하여 새로운 배열을 반환합니다.
  // 필터 함수(person => person.key != key)를 사용하여 각 사람의 key 값이 전달받은 key와 다른 경우만 남기고 나머지는 제거합니다.
  // 새로운 배열이 반환되면, setPeople 함수가 해당 배열을 새로운 상태로 설정하여 컴포넌트를 다시 렌더링합니다. 이로써 특정 키를 가진 사람이 제거된 배열로 업데이트됩니다.
  // 즉, pressHandler 함수는 특정 키를 가진 사람을 제거하고 상태를 업데이트하여 컴포넌트를 다시 렌더링합니다.
  const pressHandler = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key)
    })
  }
  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={(styles.mapItem)}>{item.name}</Text>
          </TouchableOpacity>
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
