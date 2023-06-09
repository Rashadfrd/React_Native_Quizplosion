import { createContext, useContext, useState } from "react";
import { shuffleArray } from "../utils/constants";

const AppContext = createContext()


export const Provider = ({children}) => {

    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [msg, setMsg] = useState(null)

    const fetchQuestionsByForm = async (values)=>{
        let tempArr = []
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
        // console.log(tempArr.filter(x=>x.category == values.category && x.difficulty == values.level).slice(0, +values.number))
        setQuestions(shuffleArray(tempArr.filter(x=>x.category == values.category && x.difficulty == values.level).sort(() => Math.random() - 0.5).slice(0, +values.number)))
        setLoading(false)
    }

    const nextQuestion = () => {
        setMsg(null)
        setIndex((prevState)=>{
            const index = prevState + 1
            if (index > questions.length - 1) {
                setModal(true)
                return questions.length - 1
            } else {
                return index
            }
        })
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
        setIndex,
        correct,
        setCorrect,
        nextQuestion,
        checkAnswer,
        msg,
        modal,
        setModal,
        fetchQuestionsByForm
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