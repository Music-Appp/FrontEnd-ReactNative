import { defaultStyles } from "@/styles"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import library from '@/assets/data/library.json';
import ListAlbum from "@/components/ListAlbum";
import { colors, fontSize } from "@/constants/tokens";
import ListSongFrame from "@/components/ListSongFrame";


const HomeScreen = () => {

    return <View style={defaultStyles.containerFix}>
        <ScrollView
            scrollEventThrottle={20}
            showsHorizontalScrollIndicator={true}
            decelerationRate="fast"
        >
            <View style={styles.listAlbum}>
                <Text style={styles.title}>Album Hot</Text>
                <ListAlbum albums={library} />
            </View>

            <View>
                <ListSongFrame songs={library} />
            </View>
        </ScrollView>

    </View>
}

export default HomeScreen


const styles = StyleSheet.create({
    title: {
        marginTop: 40,
        color: colors.brownMain,
        fontSize: fontSize.sm,
        fontWeight: 'bold'
    },
    listAlbum: {
        height: 400,
    }
}); 