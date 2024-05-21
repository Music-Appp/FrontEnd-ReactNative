import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import { defaultStyles } from "@/styles"
import { useNavigation } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import library from '@/assets/data/library.json';
import { useMemo } from "react"
import { trackTitleFilter } from "@/helpers/filter"

const SongScreen = () => {

    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs'
        }
    })

    const filteredSongs = useMemo(() => {
        if (!search) {
            return library;
        }
        return library.filter(trackTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.containerFix}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                style={{ paddingHorizontal: screenPadding.horizontal, marginTop: 20 }}>
                <TracksList tracks={filteredSongs} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}

export default SongScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50
    },
    scrollView: {
        marginTop: 20,
    }
})