import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View, StyleSheet,Image } from "react-native";

function Loading() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // delay navigation reset for 2 seconds
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Landing' }],
        });
      }, 1500);
    });
    // clean up
    return unsubscribe;
  }, [navigation]);

  
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
