import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Peter');
  const [person, setPerson] = useState({name: 'mario', day: 'Sunday'});
  const [number, setNumber] = useState(7);

  const clickHandler = () => {
    setName('Jack');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. James Miller'
        onChangeText={(value) => setName(value)} />
        {/* (value) => setName(value)는 화살표 함수로 작성된 이벤트 핸들러입니다. 
        이벤트 핸들러 함수는 하나의 매개변수 value를 받아들이고, setName(value) 함수를 호출하여 value 값을 name 변수에 저장합니다. */}

    <Text style={styles.boldText}>Enter day:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. Monday'
        onChangeText={(value) => setPerson(prevPerson => ({ ...prevPerson, day: value }))} />
        {/* onChangeText 이벤트 핸들러 내에서 setPerson 함수를 호출하고 있습니다. 
        setPerson 함수의 매개변수로 이전 상태 값을 받는 함수를 전달하고 있습니다. 
        이전 상태 값을 활용하여 전개 연산자(...)를 사용하여 객체를 복사한 후, day 속성만 업데이트하고 있습니다. 
        이렇게 수정하면 person 상태의 day 속성이 입력 필드의 값으로 업데이트될 것입니다. */}

    <Text style={styles.boldText}>Enter number:</Text>
      <TextInput 
        style={styles.input}
        keyboardType='numeric'
        placeholder='e.g. 7'
        onChangeText={(value) => setNumber(value)} />
        {/* onChangeText 이벤트 핸들러 내에서 setPerson 함수를 호출하고 있습니다. 
        setPerson 함수의 매개변수로 이전 상태 값을 받는 함수를 전달하고 있습니다. 
        이전 상태 값을 활용하여 전개 연산자(...)를 사용하여 객체를 복사한 후, day 속성만 업데이트하고 있습니다. 
        이렇게 수정하면 person 상태의 day 속성이 입력 필드의 값으로 업데이트될 것입니다. */}

      <Text>name: {name}, favorite day: {person.day}, favorite number: {number}</Text>
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
  },
  input: {
    borderWidth: 1,
    birderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
