import React, { useState, useRef } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Dimensions, Text } from "react-native";
import FrameAlbum from "./albumFrame";

export interface Props {
  listAlbum: string[] | undefined;
}

export default function Album({ listAlbum }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  const windowWidth = Dimensions.get("window").width;

  const renderItem = ({ item }: { item: string }) => {
    return <FrameAlbum nameAlbum={item} />;
  };

  const handleDotPress = (index: number) => {
    setActiveIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const handleSwipe = (event: any) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.floor(contentOffset.x / layoutMeasurement.width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      {listAlbum && (
        <>
          <FlatList
            ref={flatListRef}
            data={listAlbum}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const contentOffset = event.nativeEvent.contentOffset.x;
              const index = Math.round(contentOffset / windowWidth);
              setActiveIndex(index);
            }}
            onScroll={handleSwipe}
            pagingEnabled
            snapToAlignment="start"
            snapToInterval={windowWidth}
          />
          <View style={styles.frame}>
            {listAlbum.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index && styles.activeDot,
                ]}
                onPress={() => handleDotPress(index)}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  frame: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
});