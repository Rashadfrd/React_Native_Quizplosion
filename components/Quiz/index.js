import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAppContext } from "../../context/appcontext";

function Quiz() {
  const { questions, loading, index, nextQuestion, correct } = useAppContext();

  const answers = [...questions[index].wrongAnswers, questions[index].correctAnswer]

  if (loading) {
    return <Text> loading.....</Text>;
  }


  return (
    <View style={styles.quizSection}>
        <Image style={styles.blobFirst} source={require('../../assets/quiz-5.png')} />
        <Image style={styles.blobSecond} source={require('../../assets/quiz-6.png')} />
        <Text style={styles.questionAmount}>Correct answers: {correct} / {index}</Text>
        <Text style={styles.question}>{questions[index].question}</Text>
        <View style={styles.answers}>
            {
                questions && answers.map((answer, index) => {
                    return(
                        <TouchableOpacity activeOpacity={.7} style={styles.answer} key={index}>
                            <Text style={styles.answerItem}>{answer}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        <TouchableOpacity onPress={nextQuestion} style={{width:'100%'}} activeOpacity={.7}><Text style={styles.skipQuestion}>Skip</Text></TouchableOpacity>
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
        borderRadius:15
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
    }
})


export default Quiz;
