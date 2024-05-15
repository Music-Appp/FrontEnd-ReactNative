import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView, Image, Button, TextInput, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';

export const BACKGROUND_IMAGE_URL = '../assets/images/background.jpg'
export const LOGO_IMAGE_URL = '../assets/images/logo.jpg'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: BACKGROUND_IMAGE_URL,
        }}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.titleText}>Welcome to our app!</Text>
        <Image
          source={{
            uri: LOGO_IMAGE_URL,
          }}
          style={styles.image}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="yellow" // Màu nền khi button được nhấn
          onPress={() => {
            // Xử lý sự kiện khi button được nhấn
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    color: '#39FF14',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },

  backgroundImage: {
    backgroundColor: 'black',
    resizeMode: 'cover',
    opacity: 0.5,
  },

  image: {
    width: 100,
    height: 100,
  },

  button: {
    backgroundColor: '#39FF14', // Màu nền của button
    padding: 10, // Khoảng cách từ nội dung button đến viền button
    borderRadius: 5, // Góc bo viền button
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },

});