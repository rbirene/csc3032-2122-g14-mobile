import React from "react";
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function LeaderboardScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Leaderboard!</Text>
    </SafeAreaView>
  );
}

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center",
  }
});