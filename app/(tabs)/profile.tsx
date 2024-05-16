import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image, Button, TextInput,TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';
import React from 'react';

export default function ProfileScreen() {

const [name, setName] = useState<string>('');
const [nickName, setNickName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [phone, setPhone] = useState<string>();
const [avatar, setAvatar] = useState<string>();

useEffect(() => {
  setName("Lensi Mai");
  setNickName("mai1866");
  setEmail("lensimal@example.com");
  setPhone("094442345");
  setAvatar('../assets/images/avatar.jpg');
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{uri: avatar}}
          style={styles.image}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.info}>{phone}</Text>
          <Text style={styles.info}>{nickName}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Favourite music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Local music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Change account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.logOutItemText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
  },
  menuContainer: {
    width: '100%',
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  menuItemText: {
    fontSize: 16,
  },
  logOutItemText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
