import React from "react";
import {Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import dateTime from '../utils/dateTime.js';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoHeader}>
          <Image source={require('../assets/img/logo.png')}></Image>
        </View>
        <View style={styles.infoHeader}>
          <Text style={styles.infoHeaderDate}>{`${dateTime.getFullDate()}`}</Text>
          <Text style={styles.infoHeaderUniversity}>Queen's University Belfast</Text>
        </View>
        <Text style={styles.popularEventsHeading}>Popular Events</Text>
        <Text>events</Text>
        <Text style={styles.friendsActivityHeading}>Friends Activity</Text>
        <Text>friend activity</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginLeft: 30,
    marginRight: 30
  },
  logoHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 50,
    textAlign: "center"
  },
  infoHeader: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 50,
    textAlign: "left"
  },
  infoHeaderDate: {
    fontSize: 25,
    fontWeight: "bold",
  },
  infoHeaderUniversity: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold"
  },
  popularEventsHeading: {
    color: "gray",
    fontSize: 25,
    fontWeight: "bold"
  },
  friendsActivityHeading: {
    color: "gray",
    fontSize: 25,
    fontWeight: "bold"
  }
});