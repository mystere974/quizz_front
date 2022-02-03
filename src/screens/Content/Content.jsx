import { useEffect, useState } from "react"

import Swal from 'sweetalert2'
import axios from 'axios'

import './Content.css'

const Content = () => {
    const questions = [
        {
            quizzQuestion : 'Qui est le père de Luke Skywaker?',
            answerOptions : [
                {answerText : 'Ton père', isCorrect:false},
                {answerText : 'Son père', isCorrect:false},
                {answerText : 'Dark Sadios', isCorrect:false},
                {answerText : 'Dark Vador', isCorrect:true}
            ]
        },
        {
            quizzQuestion : 'Combien de doigts ont les Simpson?',
            answerOptions : [
                {answerText : '2', isCorrect:false},
                {answerText : '3', isCorrect:false},
                {answerText : '4', isCorrect:true},
                {answerText : 'Pardon?', isCorrect:false}
            ]
        },
        {
            quizzQuestion : 'Qui est immortel dans South Park?',
            answerOptions : [
                {answerText : 'Bart', isCorrect:false},
                {answerText : 'Léonardo', isCorrect:false},
                {answerText : 'Couette-Couette', isCorrect:false},
                {answerText : 'Kenny', isCorrect:true}
            ]
        },
    ]
    
    
    const [question, setQuestion] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);

    
    
    
    useEffect(() => {
        const getData = async () => {
            const resData = await axios.get
            ('http://localhost:3000/questions')
            setQuestion(resData.data)
        }
        getData()
    }, [])
    //code avec data questions juste au dessus//
    /* const handleAnswerClick = (isCorrect) => {
        if(isCorrect===true) {
            Swal.fire(
                'pas mal, pas mal',
                'continue comme ça'
                )
            } else if (isCorrect===false) {
                Swal.fire({
                    icon:'error',
                    title:'Tu n\'es pas en forme là XD'
                })
            }
            const nextQuestion = currentQuestion +1
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
            } 
        } */
        
        
        
        
        
        return (
            <>
        <div className="quizz-content">
            <div className="quizz-title">
                <h1>{question.result ? question.result[0].questions_title : null}</h1>
            </div>
            <div className="quizz-question"></div>
            <div className="quizz-answer">
            {question.result3 ? question.result3.map((e, index) => ( 
                <button key={index}>{e.questions_questions_id === question.result[0].questions_id ? e.responses_title : null}</button>
                )): null}

                
                
            </div> 
        </div> 
        </>
    )
}

export default Content
