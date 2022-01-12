import React from "react";
import {Text, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import dateTime from "../utils/dateTime";

function EventsScreen(props) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoHeaderDate}>{`${dateTime.getFullDate()}`}</Text>
          <Text style={styles.infoHeaderUniversity}>Queen's University Belfast</Text>
        </View>
        <Text>events</Text>
      </View>
    </SafeAreaView>
  );
}

export default EventsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginLeft: 30,
    marginRight: 30
  },
  infoHeader: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 70,
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
  }
});