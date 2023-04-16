import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()


export const Provider = ({children}) => {

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [msg, setMsg] = useState(null)

    useEffect(()=>{
        let tempArr = []
        const fetchQuestions = async () => {
            setLoading(true)
            const result = await fetch('https://quizplosion-default-rtdb.firebaseio.com/Questions.json')
            const data = await result.json()
            for(const key in data){
                tempArr.push({
                    id:key,
                    category: data[key].category,
                    correctAnswer: data[key].correct_answer,
                    wrongAnswers: data[key].wrong_answers,
                    difficulty: data[key].difficulty,
                    question: data[key].question,
                    wrongMsg: data[key].wrong_msg,
                    correctMsg: data[key].correct_msg,
                })
            }
            setQuestions(tempArr)
            setLoading(false)
        }
        fetchQuestions()
    },[])


    const nextQuestion = () => {
        setIndex((prevState)=>{
            const index = prevState + 1
            if (index > questions.length - 1) {
                return 0
            } else {
                return index
            }
        })
        setMsg(null)
    }

    const checkAnswer = (check) => {
        if(check){
            setCorrect((prevState)=>{
                const state = prevState + 1
                return state
            })
            setMsg(true)
        }
        else{
            setMsg(false)
        }
    }


    const data = {
        questions,
        loading,
        index,
        correct,
        nextQuestion,
        checkAnswer,
        msg
    }
    return(
        <AppContext.Provider value={data}>
        {
            children
        }
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}