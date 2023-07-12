import React, {useState}  from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/header';

export default function Home({ navigation }) {
    const [mainFunc, setMainFunc] = useState([
        { text: 'QR Code 인식', key: '1' },
        { text: '기기 온도 체크', key: '2' }
      ]);
    
      const pressHandler = (key) => {
        if(key == 1)
            navigation.navigate('QrScan');
        else
            navigation.navigate('QrScan');
      }

    return (
        <View style={styles.list}>
          <Header />
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
    )
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