import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Text } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { IChat } from '@/Utils/interfaces';
import * as Device from 'expo-device';

export default function TabTwoScreen() {
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState<IChat[] | undefined>();
  const [name, setName] = useState('');


  useEffect(() => {
    const nameOfDevice = '';
    setName(nameOfDevice);
  });

  const postData = async (data: IChat) => {
    try {
      const response = await fetch('http://localhost:3333/chat/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }), // Replace with your data
      });
      const dataRes = await response.json();

    } catch (error) {
      console.error(error);
    }
  };

  const handleSend = () => {
    if (chatData) {
      const newMessage: IChat = {
        username: "Jack",
        type: "sent",
        message: message
      };
      postData(newMessage);
      chatData.push(newMessage);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {/* Render chat messages */}
      {chatData?.map((message, index) => (
        <View
          key={index}
          style={[
            styles.chatFrame,
            message.username === 'jack' ? styles.sentMessage : styles.receivedMessage,
          ]}
        >
          <View style={styles.avatarContainer}>
            <Feather name="user" size={24} color="black" />
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{message.message}</Text>
          </View>
        </View>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />
        {/* Send button */}
        <Button title="Send" onPress={handleSend} disabled={!message} />
      </View>
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
