import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageCrop from './ImageCrop';
import { unknownTrackImageUri } from '@/constants/images';

export type AlbumItemProps = {
  album: { title?: string; artwork?: string; artist?: string };
  focused: boolean;
};

export const AlbumItem: React.FC<AlbumItemProps> = ({ album, focused }: AlbumItemProps) => {

  useEffect(() => {

  }, [focused]);

  return (
    <View style={focused ? styles.focusedBorderBackground : styles.borderBackground}>
      <View style={focused ? styles.focusedContainer : styles.container}>
        <ImageCrop source={{ uri: album.artwork ?? unknownTrackImageUri }} style={focused ? styles.focusedImage : styles.image} />
        <View style={focused ? styles.focusInfoContainer : styles.infoContainer}>
          <Text style={focused ? styles.focusArtistName : styles.artistName}>{album.artist}</Text>
          <Text style={focused ? styles.focusTitle : styles.title}>{album.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderBackground: {
    flex: 1,
    width: 180,
    height: 240,
    backgroundColor: '#8D6E00',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#8D6E00',
    opacity: 0.5,
  },
  focusedBorderBackground: {
    flex: 1,
    width: 220,
    height: 280,
    backgroundColor: '#8D6E00',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#8D6E00',
  },
  container: {
    flex: 1,
    width: 160,
    height: 190,
    backgroundColor: '#FFE790',
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
  },
  focusedContainer: {
    flex: 1,
    width: 200,
    height: 230,
    backgroundColor: '#FFE790',
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  focusedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginTop: 0,
    height: 20,
  },
  focusInfoContainer: {
    marginTop: 10,
    height: 50,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
  },
  focusArtistName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  focusTitle: {
    fontSize: 14,
  },
});