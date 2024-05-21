import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { Text, View } from "react-native"
import { StackScreenWithSearchBar } from "@/constants/layout"

const SongScreenLayout = () => {
    return <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name="index" options={{
                ...StackScreenWithSearchBar,
                headerTitle: 'Songs',
            }} />
        </Stack>
    </View>
}

export default SongScreenLayout