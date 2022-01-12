import React from "react";
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile!</Text>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: "center",
  }
});