import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function ColorDetection() {
  const [currentColor, setCurrentColor] = useState(null);

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한을 허용해야 이미지를 선택할 수 있습니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      handleImageProcessing(result.uri);
    }
  };

  const handleImageProcessing = (uri) => {
    // Perform image processing and extract the average color
    // You can use any image processing library or algorithm of your choice
    // For simplicity, we'll use a placeholder average color value here
    const averageColor = 'rgb(255, 0, 0)';
    setCurrentColor(averageColor);
  };

  useEffect(() => {
    if (currentColor) {
      // Check if the current color is within the defined color range
      // Check if the current color is within the defined color range
      const orangeMin = [200, 0, 0];
      const redMax = [255, 100, 100];

      const [r, g, b] = currentColor
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(Number);

      if (
        r >= orangeMin[0] &&
        r <= redMax[0] &&
        g >= orangeMin[1] &&
        g <= redMax[1] &&
        b >= orangeMin[2] &&
        b <= redMax[2]
      ) {
        Alert.alert('현재 기기에 문제가 존재합니다!');
      } else {
        Alert.alert('정상');
      }
    }
  }, [currentColor]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleChooseImage}>
        <Text style={styles.buttonText}>이미지 선택</Text>
      </TouchableOpacity>

      {currentColor && (
        <View style={styles.colorPreviewContainer}>
          <Text style={styles.colorText}>평균 색상: {currentColor}</Text>
          <View style={[styles.colorPreview, { backgroundColor: currentColor }]} />
        </View>
      )}
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
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  colorPreviewContainer: {
    alignItems: 'center',
  },
  colorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorPreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});