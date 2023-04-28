import React from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity } from "react-native";
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
            ? <View style={styles.alert}>
            <Text style={styles.alertMsg}>Təbrik edirəm. Sualların {correct === 0 ? '0' : Math.ceil(correct * 100 / questions.length)} faizinə düzgün cavab verdiniz</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.navigate('Landing')}} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.replace('Form')}} style={styles.button}>
                <Text style={styles.buttonText}>Try Again</Text>
              </TouchableOpacity>
            </View>
          </View>
          
            : <View style={styles.alert}>
                <Text style={styles.alertMsg}>Eybiyoxdu. Sualların {correct === 0 ? '0' : Math.ceil(correct * 100 / questions.length)} faizinə düzgün cavab verdiniz</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.navigate('Landing')}} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {setModal(false);setCorrect(0);setIndex(0),navigation.replace('Form')}} style={styles.button}>
                    <Text style={styles.buttonText}>Try Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    },
    alert:{
      width:'80%',
      height:200,
      backgroundColor:'#373737',
      borderRadius:13,
      alignItems:'center',
      justifyContent:'space-between',
      overflow:'hidden'
    },
    alertMsg:{
      color:'#fff',
      padding:20,
      textAlign:'justify',
      fontSize:17
    },
    buttons:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'100%',
      borderTopWidth:.3,
      borderTopColor:'#b0b0b0'
    },
    button:{
      paddingVertical:14,
      flex:1,
      borderLeftWidth:.3,
      borderLeftColor:'#b0b0b0'
    },
    buttonText:{
      color:'#fff',
      fontSize:15,
      textAlign:'center'
    }
});

export default Quizmodal;
