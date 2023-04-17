import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import { useAppContext } from "../../context/appcontext";
import { useNavigation } from "@react-navigation/native";

function Quizmodal() {
    const {modal, setModal, correct, setCorrect, setIndex, questions} = useAppContext()
    const navigation = useNavigation()
  return (
    <Modal transparent={true} animationType='fade' visible={modal}>
      <View style={styles.modal}>
        {
            correct * 100 / questions.length > 50
            ? <Text style={{color:'#fff'}} onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.navigate('Landing')}}>Pis deyil da nə deyim</Text>
            : <Text style={{color:'#fff'}} onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.navigate('Landing')}}>Tupoy</Text>
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modal:{
        flex:1,
        backgroundColor:'rgba(0,0,0,.9)',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default Quizmodal;
