import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView, Image, Button, TextInput, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';

export const BACKGROUND_IMAGE_URL = '../assets/images/background.jpg'
export const LOGO_IMAGE_URL = '../assets/images/logo.jpg'


export default function HomeScreen () {
  return (
    <View style={ styles.container }>
      <ImageBackground 
        source={{
          uri: BACKGROUND_IMAGE_URL,
        }}
        style={styles.container}
      >
      <Text style={styles.titleText}>Welcome to ours app!</Text>
      <Image
          source={{
            uri: LOGO_IMAGE_URL,
          }}
          style={styles.image}
        />
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 35,
    color: '#f457ef',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },

  image: {
    width: 100,
    height: 100,
    flex: 1,
    position:'absolute',
    bottom: 0,
  },

  button: {
    alignItems: "center",
  }

});