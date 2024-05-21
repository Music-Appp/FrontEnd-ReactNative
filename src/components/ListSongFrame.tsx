import { Dimensions, StyleSheet, FlatList, View } from "react-native";
import SongFrame from "./songFrame";

interface Album {
    title?: string;
    artist?: string;
    artwork?: string;
}

interface Songs {
    songs: Album[]
}

const ListSongFrame = ({ songs }: Songs) => {
    const windowWidth = Dimensions.get('window').width;
    const numColumns = 3;
    const itemWidth = (windowWidth - 48) / numColumns; // 16 for left and right padding

    return (
        <FlatList
            data={songs}
            keyExtractor={(item) => item.title!}
            numColumns={numColumns}
            contentContainerStyle={styles.container}
            renderItem={({ item, index }) => (
                <View style={[styles.item, { width: itemWidth }]}>
                    <SongFrame song={item} />
                </View>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            columnWrapperStyle={styles.columnWrapper}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    item: {
        marginHorizontal: 0,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

export default ListSongFrame;