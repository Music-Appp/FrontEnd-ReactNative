import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
// import TrackPlayer from 'react-native-track-player';

interface SongPlayerProps {
    songUrl: string;
}

const SongPlayer: React.FC<SongPlayerProps> = ({ songUrl }) => {
    useEffect(() => {
        setupPlayer();


    }, []);

    const setupPlayer = async () => {
        // await TrackPlayer.setupPlayer();
        // await TrackPlayer.add({
        //     id: 'mySong',
        //     url: songUrl,
        //     title: 'My Song',
        //     artist: 'Artist',
        // });
    };

    const playSong = async () => {
        // await TrackPlayer.play();
    };

    const pauseSong = async () => {
        // await TrackPlayer.pause();
    };

    return (
        <View>
            <Button title="Play" onPress={playSong} />
            <Button title="Pause" onPress={pauseSong} />
        </View>
    );
};

export default SongPlayer;