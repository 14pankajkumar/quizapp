import React from 'react'

const Questions = ({ showAnswers, handleAnswer, data: {question, correct_answer, incorrect_answers}, }) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
        () => Math.random() - 0.5
        );
    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md ">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{__html: question}} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {shuffledAnswers.map((answer) => {
                    const bgColor = showAnswers ? 
                    answer === correct_answer ? 
                    'bg-green-500' : 'bg-red-500'
                    : 'bg-white';

                    const textColor = showAnswers ? 
                        'text-white' : 'text-purple-800'
                return (
                <button 
                    className={` ${bgColor} ${textColor} bg-white p-4 text-purple-800 font-semibold rounded shadow mb-4`}
                    onClick={() => handleAnswer(answer)}
                    dangerouslySetInnerHTML={{ __html: answer}}
                />
                )})}
            </div>
        </div>
    
    )
};

export default Questions
