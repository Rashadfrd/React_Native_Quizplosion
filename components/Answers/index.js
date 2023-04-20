import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useAppContext } from '../../context/appcontext';

function Answers (){
    const [answers, setAnswers] = useState([])
    const { questions, index, checkAnswer, msg } = useAppContext();
    const {correctAnswer, wrongAnswers} = questions[index]


    useEffect(()=>{
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          }
          setAnswers(shuffleArray([...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5)))
    },[index])
    return (
        <View style={styles.answers}>
            {
                questions && answers.length > 0 ? answers.map((answer, index) => {
                    return(
                        <TouchableOpacity disabled={msg || msg === false} onPress={() => {checkAnswer(correctAnswer === answer)}} activeOpacity={.7} style={styles.answer} key={index}>
                            <Text style={styles.answerItem}>{answer}</Text>
                        </TouchableOpacity>
                    )
                }) : <Text>...loading</Text>
            }
        </View>
    )
  }
  const styles = StyleSheet.create({
    answers:{
        marginTop:35,
        width:'100%'
    },
    answer:{
        backgroundColor:'#fff',
        margin:7,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        borderRadius:15,
    },
    answerItem:{
        fontSize:19,
        color:'#1c1a5e'
    }
})
export default Answers
