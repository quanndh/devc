import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgs = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/1.jpg') },
  { id: 7, imgSource: require('./assets/1.jpg') },
  { id: 8, imgSource: require('./assets/1.jpg') },
  { id: 9, imgSource: require('./assets/1.jpg') },

]

const centerImgData = Math.floor(imgs.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="light"/> */}
      <View style={styles.containerAction}>
        <Ionicons name="ios-arrow-back" size={24} color="black" />
        <Ionicons name="ios-more" size={24} color="black" />
      </View>
      <View style={styles.header}>

        <Image style={styles.avatar} source={require("./assets/avatar.jpg")} />
        <View>
          <View>
            <Text style={styles.title}>
              Quan nguyen
            </Text>
            <Text style={styles.subtitle}>
              Devloper
            </Text>
          </View>
          <View style={styles.headerRow}>
            <TouchableOpacity style={[styles.btn, styles.primaryButton]}>
              <Text style={styles.btnText}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.secondaryButton]}>
              <Text style={styles.btnText}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.statistic}>
        <View style={styles.statisticItem}>
          <Text style={styles.title}>210</Text>
          <Text style={styles.subtitle}>Photos</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.title}>15k</Text>
          <Text style={styles.subtitle}>Followers</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.title}>650</Text>
          <Text style={styles.subtitle}>Following</Text>
        </View>
      </View>
      <View style={styles.imageGallery}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}

          contentContainerStyle={{
            flexGrow: 1,
            flexWrap: "wrap",
            flexDirection: "row"
          }}>
          {
            imgs.map(item => {
              return (
                <TouchableOpacity key={item.id} style={{ padding: 0, margin: 0 }}>
                  <Image source={item.imgSource} style={styles.image} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <AntDesign name="home" size={24} color="black" />
        <Ionicons name="ios-add-circle-outline" size={24} color="black" />
        <Feather name="user" size={24} color="black" />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  containerAction: {
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24
  },
  header: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24
  },
  headerAction: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 16,
    color: "#cecece",
    fontWeight: "700"
  },
  btn: {
    height: 28,
    backgroundColor: "red",
    padding: 16,
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold"
  },
  primaryButton: {
    backgroundColor: FOLLOW_COLOR
  },
  secondaryButton: {
    backgroundColor: SEND_MESSAGE_COLOR
  },
  statistic: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24
  },
  statisticItem: {
    alignItems: "center",
  },
  imageGallery: {
    flex: 1,
    flexGrow: 1,
  },
  image: {
    width: 140,
    height: 160,
    margin: 8,
    borderRadius: 20
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  bottomNav: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

});
