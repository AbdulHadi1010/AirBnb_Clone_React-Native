import { StatusBar } from "expo-status-bar";
import {ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Grid from "./Grid";
import Card from "./Card";
import data from './data';

export default function App() {
  const cards = data.map((item) =>{
    return(
      <Card
        key = {item.id}
        item={item}
      />
    )
  })
  return (
    <View style={styles.container}>
      <Header />
      <Grid />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', }} >
      <ScrollView horizontal={true} >
      {cards}
      </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(4, 4, 4, 0.8)",
  },
});
