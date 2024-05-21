import React, { useState, useRef, FC, useEffect } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AlbumItem } from './AlbumItem';

interface Album {
  title?: string;
  artist?: string;
  artwork?: string;
}

interface ListAlbumProps {
  albums: Album[];
}

const ListAlbum: FC<ListAlbumProps> = ({ albums }) => {
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    // console.log('contentOffset : ', contentOffset);
    // console.log('layoutMeasurement : ', layoutMeasurement);

    const { width } = layoutMeasurement;
    const itemWidth = 200; // Độ rộng của mỗi AlbumItem
    const { x } = contentOffset;

    // console.log(x, itemWidth);

    const visibleIndexes: number = Math.floor((x + 65) / itemWidth);

    // console.log("index : ", visibleIndexes);

    setVisibleItems(visibleIndexes);

  };

  const handlePress = (index: number) => {
    setVisibleItems(index);
    const albumItemWidth = Dimensions.get('window').width - 185; // Chiều rộng AlbumItem

    const contentOffsetX = albumItemWidth + 200 * (index - 1); // Tính toán vị trí cuộn

    // console.log("contentOffsettttttttttttttttt : ", contentOffsetX);

    scrollRef.current?.scrollTo({ x: contentOffsetX, y: 0, animated: true });

  };

  // useEffect(() => {
  //   // Tính toán vị trí của AlbumItem và cuộn đến vị trí đó
  //   const albumItemWidth = Dimensions.get('window').width - 185; // Chiều rộng AlbumItem

  //   const contentOffsetX = albumItemWidth + 200 * (visibleItems - 1); // Tính toán vị trí cuộn

  //   console.log("contentOffsettttttttttttttttt : ", contentOffsetX);

  //   scrollRef.current?.scrollTo({ x: contentOffsetX, y: 0, animated: true });

  // }, [visibleItems]);


  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      onScroll={handleScroll}
      scrollEventThrottle={20}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
      snapToInterval={200}
      // snapToAlignment="center"
      decelerationRate="fast"
    >
      {albums.map((album, index) => (
        <TouchableOpacity key={album.title || index} onPress={() => handlePress(index)}>
          <View style={
            [styles.albumItem,
            (index == 0) && styles.firstAlbumItem,
            (index == albums.length - 1) && styles.endAlbumItem,
            (index == visibleItems) && styles.focusAlbumItem
            ]}>
            <AlbumItem album={album} focused={index === visibleItems} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListAlbum;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    alignItems: 'center', // Căn giữa theo chiều ngang
    // justifyContent: 'center', // Căn giữa theo chiều dọc
  },
  albumItem: {
    width: 180,
    height: 220,
    margin: 10
  },
  focusAlbumItem: {
    width: 220,
    height: 310,
  },
  firstAlbumItem: {
    marginLeft: 70
  },
  endAlbumItem: {
    marginRight: 70
  }
}); 