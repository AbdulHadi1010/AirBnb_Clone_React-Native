import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
// import AutoScroll from "@homielab/react-native-auto-scroll";

export default function Card(props) {
  const img1 = require("./assets/Star1.png");
  
  return (
    <View>
      {/* <AutoScroll style={styles.scrolling1}> */}
        <Image source={props.item.coverImg} style={styles.img} />
        <View style={styles.view}>
          <Image source={img1} style={styles.img1} />
          <Text style={styles.txt}> {props.item.stats.rating} </Text>
          <Text style={styles.txt}> ({props.item.stats.reviewCount}) </Text>
          <Text style={styles.txt}> • {props.item.location}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.txtout}>{props.item.title}</Text>
          <Text style={styles.txtout}>${props.item.price}/person</Text>
        </View>
      {/* </AutoScroll> */}
    </View>
  );
}

const styles = StyleSheet.create({
  scrolling1: {
    marginVertical: 10,
  },
  view: {
    flexDirection: "row",
    marginTop: 5,
  },
  view2: {
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  txtout: {
    color: "white",
    fontSize: 10,
  },
  txt: {
    color: "white",
    fontSize: 10,
  },
  img1: {
    marginLeft: 10,
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  img: {
    width: "90%",
    height: "40%",
    resizeMode: "contain",
    // marginLeft:,
    marginTop: 20,
  },
});
