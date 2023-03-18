import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const image = require("./assets/airbnblogo.png");
  return (
    <>
      <View style={styles.view}>
        <Image source={image} style={styles.img} />
       <TouchableOpacity><Text style={styles.txt}>Home</Text></TouchableOpacity>
       <TouchableOpacity><Text style={styles.txt}>Pricing</Text></TouchableOpacity>
       <TouchableOpacity><Text style={styles.txt}>About Us</Text></TouchableOpacity>
       <TouchableOpacity><Text style={styles.txt}>Contact Us</Text></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 60,
    resizeMode: 'contain', 
  },
  view: {
    flexDirection: 'row',
    height: 60,
    paddingLeft: 10,
    marginTop: 20,
    backgroundColor: "rgba(4, 4, 4, 0.4)",
    justifyContent: 'space-between',
  },
  txt: {
    color: 'white',
    marginTop: 20,
    }
});
