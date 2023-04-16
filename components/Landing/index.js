import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Landing() {

  const navigation = useNavigation()

  return (
    <View style={styles.landingSection}>
      <Image style={styles.blobFirst} source={require('../../assets/quiz-5.png')} />
      <Image style={styles.blobSecond} source={require('../../assets/quiz-6.png')} />
      <View style={styles.appImageContainer}>
        <Image
          source={require("../../assets/quiz-2.webp")}
          style={{ width: 370, height: 300, marginRight: 10 }}
        />
      </View>
      <Text style={styles.appTitle}>
        <Image 
          source={require("../../assets/quiz-4.png")}
          style={{width:50,height:50}}  
        />
        uizPlosion
      </Text>
      <Text style={styles.appDesc}>
        Elə bilirsən ağıllısan? Elə indi Quizplosion ilə özünü test et!
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Quiz')}} activeOpacity={0.7} style={styles.startBtn}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}> Başla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  landingSection: {
    flex: 1,
    backgroundColor: "#1c1a5e",
    paddingVertical: 35,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    position: "relative",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  appDesc: {
    textAlign: "center",
    width: "95%",
    color: "#fff",
    fontSize: 18,
  },
  startBtn: {
    marginTop: 30,
    backgroundColor: "#41e5ed",
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  blobFirst:{
    position:'absolute',
    left:0,
    top:-20
  },
  blobSecond:{
    position:'absolute',
    bottom:-135,
    right:30
  }
});

export default Landing;
