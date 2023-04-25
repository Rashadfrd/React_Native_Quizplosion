import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAppContext } from "../../context/appcontext";
import Quizmodal from "../Modal";
import Answers from "../Answers";

function Quiz() {
    
  const { questions, loading, index, nextQuestion, checkAnswer, correct, msg } = useAppContext();

  const { correctMsg, wrongMsg,} = questions[index]
  
//   let answers = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5)
//   let tempIndex = Math.floor(Math.random() * 4)

  
//   if (tempIndex === 3) {
//     answers.push(correctAnswer)
//   } else {
//     answers.push(answers[tempIndex])
//     answers[tempIndex] = correctAnswer
//   }



  if (loading) {
    return <Text> loading.....</Text>;
  }


  return (
    <View style={styles.quizSection}>
        <Quizmodal />
        <Image style={styles.blobFirst} source={require('../../assets/quiz-5.png')} />
        <Image style={styles.blobSecond} source={require('../../assets/quiz-6.png')} />
        <Text style={styles.questionAmount}>Correct answers: {correct} / {index + 1}</Text>
        {}
        <Text style={styles.question}>{questions[index].question}</Text>
        {
            msg === null
            ? null
            : msg ? <Text style={styles.correctMsg}>{correctMsg}</Text> : <Text style={styles.wrongMsg}>{wrongMsg}</Text>
        }
        <Answers/>
        <TouchableOpacity onPress={nextQuestion} style={{width:'100%'}} activeOpacity={.7}><Text style={styles.skipQuestion}>Növbəti</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    quizSection : {
        flex: 1,
        backgroundColor: "#1c1a5e",
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:24,
        position:'relative',
        paddingTop:85
    },
    questionAmount:{
        color:'#6f6ce0',
        fontSize:17,
        marginBottom:10
    },
    question : {
        color:'#fff',
        fontSize:30
    },
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
    },
    blobFirst:{
        position:'absolute',
        top:-50,
        right:0
    },
    blobSecond:{
        position:'absolute',
        bottom:-130,
        left:60
    },
    skipQuestion:{
        marginTop:10,
        color:'#fff',
        alignItems:'flex-end',
        fontSize:17,
        textAlign:'right'
    },
    wrongMsg:{
        width:'92%',
        marginTop:15,
        backgroundColor:'rgba(255, 0, 0, 0.4)',
        color:'#fff',
        padding:12,
        textAlign:'center',
        borderRadius:10,
        fontSize:16
    },
    correctMsg:{
        width:'92%',
        marginTop:15,
        backgroundColor:'rgba(0, 255, 0, 0.3)',
        color:'#fff',
        padding:12,
        textAlign:'center',
        borderRadius:10,
        fontSize:16
    }
})


export default Quiz;
