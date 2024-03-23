import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Text } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { IChat } from '@/Utils/interfaces';
import * as Device from 'expo-device';

export default function TabTwoScreen() {


  const [data, setData] = useState<string>('hello moi nguoi');

  useEffect(() => {

  })

  const hanldeClickCuong = () => {
    setData('hello Cuong');
  }
  const hanldeClickDat = () => {
    setData('hello Dat');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{data}</Text>
      <button onClick={() => hanldeClickCuong()}>click hello Cuong</button>
      <button onClick={() => hanldeClickDat()}>click hello Dat</button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatFrame: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  avatarContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
  },
  sentMessage: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },

});
