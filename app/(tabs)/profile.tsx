import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image, Button, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';

export default function HomeScreen() {
const [name, setName] = useState<string>('');
const [nickName, setNickName] = useState<string>('');
const [firstName, setFirstName] = useState<string>(''); // useState(() => '')
const [lastName, setLastName] = useState<string>(''); // useState(() => '')
const [email, setEmail] = useState<string>(''); // useState(() => '')
const [gender, setGender] = useState<string>(''); // useState(() => '')
const [age, setAge] = useState<number>();
const [phone, setPhone] = useState<string>();
const [avatar, setAvatar] = useState<string>();

useEffect(() => {
  setName("Lensi Mai");
  setNickName("mai1866");
  setFirstName("Lensi");
  setLastName("Mai");
  setEmail("lensimal@example.com");
  setGender("female");
  setAge(18);
  setPhone("094442345");
  setAvatar('../assets/images/avatar.jpg');
  });

  return (
    <View style={styles.container}>
        <Image
          source={{uri: avatar}}
          style={styles.image}
        />
        <Text style={styles.nameText}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  nameText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'sans-serif',
  },
  infoText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'sans-serif',
  },
  image: {
    width: 100,
    height: 100,
  },
});