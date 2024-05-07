import{ StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import{ Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import Album from '@/components/ALBUM';
import SongPlayer from '@/components/PlaySong/SongPlayer';
import TrackPlayer from 'react-native-track-player';

export default function TabOneScreen() {
  const [album setAlbum] = useState<string[] | undefined>();
  const [song, setSong] = useState<string[] | undefined>();
  const [singer, setSinger] = useState<string[] | undefined>();

  const [songUrl, setSongUrl] = useState('')
  const [username, setUsername] = useState('')


  useEffect(() => {
    setAlbum(['YEU 5', 'DIEU TUYET VOI', 'MOI NGAY MOT NIEM VUI', 'CHUNG TA LA CUA NHAU', 'YEU 5', 'DIEU TUYET VOI', 'MOI NGAY MOT NIEM VUI', 'CHUNG TA LA CUA NHAU', 'YEU 5', 'DIEU TUYET VOI', 'MOI NGAY MOT NIEM VUI', 'CHUNG TA LA CUA NHAU']);
    setSong(['ONG BA ANH', 'MOT NHA', 'THANH XUAN', 'BAI CA TUOI TRE']);
    setSinger(['SON TUNG MTP', 'BICH PHUONG', 'MCK', 'MR.SIRO']);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Text style={styles.title}>Album</Text>
        <Album listAlbum={album} />
        <Text style={styles.title}>Song</Text>
        <Album listAlbum={song} />
        <Text style={styles.title}>Singer</Text>
        <Album listAlbum={singer} />
      </View>
      <SongPlayer songUrl={songUrl} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gridContainer: {

  },
});
