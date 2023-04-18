import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, StyleSheet,Image } from "react-native";

function Loading() {
  const navigation = useNavigation();

  useEffect(()=>{
      setTimeout(() => {
          navigation.navigate('Landing')
      }, 1000);
  },[])

  return (
    <View style={styles.loading}>
      <Text style={styles.appTitle}>
        <Image
          source={require("../../assets/quiz-3.png")}
          style={{ width: 45, height: 60}}
        />
        uizPlosion
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1a5e",
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  }
});
export default Loading;
