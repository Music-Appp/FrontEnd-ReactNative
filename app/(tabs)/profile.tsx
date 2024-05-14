import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView, Image, Button, TextInput, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';


export const AVATAR_IMAGE_URL = '../assets/images/avatar.jpg'
export const name = "Lensi Mai"
export const firstName = "Mai"
export const lastName = "Lensi"
export const email = "mai@gmail.com"
export const gender = "famale"
export const age = "28"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Your profile</Text>
        <Image
          source={{
            uri: AVATAR_IMAGE_URL,
          }}
          style={styles.image}
        />
        <Text style={styles.welcomeText}>Hello {name}!</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="yellow" // Màu nền khi button được nhấn
          onPress={() => {
            // Xử lý sự kiện khi button được nhấn
          }}
        >
          <Text style={styles.buttonText}>UPDATE IMAGE</Text>
        </TouchableHighlight>
        <Text style={styles.contentText}>First name: {firstName}</Text>
        <Text style={styles.contentText}>Last name: {lastName}</Text>
        <Text style={styles.contentText}>Email: {email}</Text>
        <Text style={styles.contentText}>Gender: {gender}</Text>
        <Text style={styles.contentText}>Age: {age}</Text>
        <TouchableHighlight
          style={styles.changeButton}
          underlayColor="yellow" // Màu nền khi button được nhấn
          onPress={() => {
            // Xử lý sự kiện khi button được nhấn
          }}
        >
          <Text style={styles.changeButtonText}>CHANGE PROFILE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.logoutButton}
          underlayColor="yellow" // Màu nền khi button được nhấn
          onPress={() => {
            // Xử lý sự kiện khi button được nhấn
          }}
        >
          <Text style={styles.logoutButtonText}>LOG OUT</Text>
        </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 63,
    color: '#39FF14',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 40,
    color: 'pink',
    fontFamily: 'sans-serif',
  },
  contentText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'sans-serif',
    alignSelf: 'flex-start',
    bottom: -150,
  },
  image: {
    width: 100,
    height: 100,
    position:'absolute',
    bottom: 350,
  },

  button: {
    backgroundColor: '#39FF14', // Màu nền của button
    padding: 10, // Khoảng cách từ nội dung button đến viền button
    borderRadius: 5, // Góc bo viền button
    bottom: -125,
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },

  changeButton: {
    backgroundColor: 'yellow', // Màu nền của button
    padding: 10, // Khoảng cách từ nội dung button đến viền button
    borderRadius: 5, // Góc bo viền button
    bottom: -175,
    alignSelf: 'flex-start',
  },

  changeButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  logoutButton: {
    backgroundColor: 'yellow', // Màu nền của button
    padding: 10, // Khoảng cách từ nội dung button đến viền button
    borderRadius: 5, // Góc bo viền button
    bottom: -132.5,
    alignSelf: 'flex-end',
  },

  logoutButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});