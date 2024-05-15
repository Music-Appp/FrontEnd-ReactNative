import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView, Image, Button, TextInput, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';

export const BACKGROUND_IMAGE_URL = '../assets/images/background.jpg'
export const LOGO_IMAGE_URL = '../assets/images/logo.jpg'

const buttonData = [
  { text: 'LOGIN', onPress: () => console.log('LOGIN pressed') },
  { text: 'SIGN UP', onPress: () => console.log('SIGN UP pressed') },
];

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
        <Text style={styles.titleText}>Welcome to our app! 
        Enjoy your music
        </Text>
        <Image
          source={{
            uri: LOGO_IMAGE_URL,
          }}
          style={styles.image}
        />
        <View style={styles.buttonsContainer}>
          {buttonData.map((button, index) => (
            <TouchableHighlight
              key={index}
              style={styles.button}
              underlayColor="yellow"
              onPress={button.onPress}
            >
              <Text style={styles.buttonText}>{button.text}</Text>
            </TouchableHighlight>
          ))}
        </View>
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
    fontSize: 30,
    color: 'black',
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
    bottom: -5,
    width: 125,
    height: 125,
  },

  button: {
    backgroundColor: '#39FF14',
    padding: 5,
    borderRadius: 5, 
    borderColor: 'black',
    borderWidth: 2,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});