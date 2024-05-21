import { defaultStyles } from "@/styles"
import { Animated, Easing, StyleSheet, Text, View } from "react-native"
import library from '@/assets/data/library.json';
import ListAlbum from "@/components/ListAlbum";
import { colors, fontSize } from "@/constants/tokens";
import DiskItem from "@/components/DiskItem";
import { useEffect, useRef } from "react";
import { unknownTrackImageUri } from "@/constants/images";

interface Song {
    title?: string;
    artist?: string;
    artwork?: string;
}

interface ISong {
    song: Song
}

const SongFrame = ({ song }: ISong) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startRotation();
    }, []);

    const startRotation = () => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 20000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "720deg"],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.disk, { transform: [{ rotate: rotation }] }]}>
                <DiskItem size={100} uri={song.artwork ? song.artwork : unknownTrackImageUri} />
            </Animated.View>
            <View style={styles.infor}>
                <Text style={styles.artistName}>{song.artist}</Text>
                <Text style={styles.title}>{song.title}</Text>
            </View>
        </View>
    )
}

export default SongFrame


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFE790',
        margin: 10,
        borderRadius: 10
    },
    disk: {
        marginLeft: 50
    },
    infor: {
        width: 300,
        marginLeft: 70,
        justifyContent: "center"
    },
    artistName: {
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
}); 