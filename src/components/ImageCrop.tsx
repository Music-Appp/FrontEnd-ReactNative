import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

interface ImageCropProps {
    source: any; // Định dạng source ảnh của bạn
    style: any;
}

const ImageCrop: React.FC<ImageCropProps> = ({ source, style }) => {
    const { width, height } = style;
    const aspectRatio = width / height;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    let computedWidth = width;
    let computedHeight = height;

    if (aspectRatio > 1) {
        computedWidth = Math.min(width, windowWidth);
        computedHeight = computedWidth / aspectRatio;
    } else {
        computedHeight = Math.min(height, windowHeight);
        computedWidth = computedHeight * aspectRatio;
    }

    return (
        <View style={styles.container}>
            <Image source={source} style={[style, { width: computedWidth, height: computedHeight }]} resizeMode="cover" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusedImage: {
        // Style cho hình ảnh được tập trung
    },
    image: {
        // Style cho hình ảnh không được tập trung
    },
});

export default ImageCrop;