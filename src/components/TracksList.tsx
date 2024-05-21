import library from "@/assets/data/library.json"
import { FlatList, FlatListProps, Text, View } from "react-native"
import { TracksListItem } from "./TracksListItem"
import { utilsStyles } from "@/styles"
import { screenPadding } from "@/constants/tokens"

export type TrackListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({tracks, ...flatListProps }: TrackListProps) => {
	return (
		<View>
			<FlatList
				data={tracks}
				contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
				ListFooterComponent={ItemDivider}
				ItemSeparatorComponent={ItemDivider}
				renderItem={({ item: track }) => (
					<TracksListItem
						track={{
							...track,
							image: track.artwork,
						}}
					/>
				)}
				{...flatListProps}
			/>
		</View>
	)
}
