import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"


const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarInactiveTintColor: colors.brownMain,
            tabBarActiveTintColor: colors.blackMain,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '700',
            },
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                height: 60,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderTopWidth: 0,
                paddingTop: 4,
                backgroundColor: colors.yelloWeight,

            },
            tabBarBackground: () => <BlurView intensity={95}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    overflow: "hidden",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />
        }}>
            <Tabs.Screen name="favorites" options={{
                title: "Favorites",
                tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} />
            }} />
            <Tabs.Screen name="playlist" options={{
                title: "Playlist",
                tabBarIcon: ({ color }) => <FontAwesome name="list" size={20} color={color} />
            }} />
            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} />
            }} />
            <Tabs.Screen name="(songs)" options={{
                title: "Song",
                tabBarIcon: ({ color }) => <FontAwesome name="music" size={20} color={color} />
            }} />
            <Tabs.Screen name="user" options={{
                title: "User",
                tabBarIcon: ({ color }) => <FontAwesome name="user" size={20} color={color} />
            }} />

        </Tabs>
    )
}

export default TabsNavigation