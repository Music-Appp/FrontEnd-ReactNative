import { colors } from '@/constants/tokens';
import React from 'react';
import { View, StyleSheet } from 'react-native';


interface typeCircle {
    size: number,
    status: number
}


const Circle = ({ size, status }: typeCircle) => {
    return (
        <View style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: (status == -1) ? colors.brownMain : 'rgba(0, 0, 0, 0)',
            borderWidth: 10,
            borderColor: status ? colors.brownMain : colors.yelloWeight
        }} />
    );
};

const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        top: 100,
        left: 200,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: colors.brownMain,
        opacity: 0.5,
    },
});

export default Circle;