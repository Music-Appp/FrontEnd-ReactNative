import { Image, StyleSheet, Text } from "react-native";
import { View } from "../Themed"
import { truncatedNameAlbum } from "@/Utils/functions";

export interface Props {
    nameAlbum: string;
}

export default function FrameAlbum({ nameAlbum }: Props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://variety.com/wp-content/uploads/2014/05/doraemon2.jpg?w=1024',
                }}
            />
            <Text>{truncatedNameAlbum(nameAlbum)}</Text>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        marginRight: 30,
        fontSize: 15,

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
});