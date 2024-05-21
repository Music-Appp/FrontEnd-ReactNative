import React, { useRef } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Circle from "./circle"
import { unknownTrackImageUri } from "@/constants/images";


interface IDisk {
    size: number;
    uri: string;
}

const DiskItem = ({ size, uri }: IDisk) => {
    // const countCheck: boolean = (size / 5) % 2 == 0;
    // const circleCount = countCheck ? (size / 5 + 1) : (size / 5);
    const circleCount = size / 5;
    const circleSize = size;
    const difference = size / 20;

    return (
        <View style={styles.container}>
            <Image source={{ uri: uri }} style={[styles.image, {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2
            }]} />
            <View style={styles.disk}>
                {[...Array(circleCount)].map((_, index) => (
                    <Circle key={index} size={circleSize - index * difference} status={(index == [...Array(circleCount)].length - 1) ? -1 : (index % 2)} />
                ))}
            </View>
        </View>
    )
}

export default DiskItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disk: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    image: {
        position: 'absolute',
    }
});