import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"
import { StackScreenWithSearchBar } from "@/constants/layout"

const HomeScreenLayout = () => {
    return <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name="index" options={{
                ...StackScreenWithSearchBar,
                headerTitle: 'Home',
            }}/>
        </Stack>
    </View>
}

export default HomeScreenLayout