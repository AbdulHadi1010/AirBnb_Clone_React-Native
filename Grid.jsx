import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

export default function Grid() {
  const image = require("./assets/grid.png");

  return (
    <View style={styles.main}>
      <Image source={image} style={styles.img} />
      <Text style={styles.txt}>Online Experiences</Text>
      <Text style={styles.txt1}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "50%",
  },
  img: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  txt: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  txt1: {
    marginTop: 10,
    color: "white",
    marginRight: 100,
  },
});
