import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Post from './Post';



export default function App() {

  const data = [
    {
      id: 1,
      name: "Quan Nguyen",
      image: require("./assets/1.jpg"),
      likeCount: 200,
      avatar: require("./assets/avatar.jpg"),
      isLike: false
    },
    {
      id: 2,
      name: "Quan Nguyen",
      image: require("./assets/5.jpg"),
      likeCount: 200,
      avatar: require("./assets/avatar.jpg"),
      isLike: false
    },
    {
      id: 3,
      name: "Quan Nguyen",
      image: require("./assets/4.jpg"),
      likeCount: 200,
      avatar: require("./assets/avatar.jpg"),
      isLike: false
    },
    {
      id: 4,
      name: "Quan Nguyen",
      image: require("./assets/3.jpg"),
      likeCount: 200,
      avatar: require("./assets/avatar.jpg"),
      isLike: false
    },
    {
      id: 5,
      name: "Quan Nguyen",
      image: require("./assets/2.jpg"),
      likeCount: 200,
      avatar: require("./assets/avatar.jpg"),
      isLike: false
    }
  ]

  const [posts, setPosts] = useState(data);

  const handleToggleLike = (index: number) => {
    let tempPost = [...posts];
    if (tempPost[index].isLike) {
      tempPost[index].likeCount--;
    } else {
      tempPost[index].likeCount++;
    }
    tempPost[index].isLike = !tempPost[index].isLike;
    setPosts(tempPost)
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <View style={styles.feed}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          {
            posts.map((item, index) => {
              return <Post toggleLike={() => handleToggleLike(index)} key={item.id} data={item} />
            })
          }
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.15,
    paddingTop: 40,
    paddingRight: 5,
    elevation: 1,
  },
  logo: {
    flex: 1,
    height: 40,
  },
  feed: {
    flex: 0.9,
    height: 500,
  }
});
