import React, { useState } from 'react';
import './quizzer.css';

export function Quizzer() {
	const questions = [
		{
			questionText: 'What is Triggs First Name?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Ultimate Goobie', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Baby boi', isCorrect: false },
			],
		},
		{
			questionText: 'What is Triggs favorite color?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: true },
				{ answerText: 'Vanilla Orange', isCorrect: false },
				{ answerText: 'Cranberry Vampire', isCorrect: false },
				{ answerText: 'Dr.Pepper Peeps', isCorrect: false },
			],
		},
		{
			questionText: 'What type of phone does Trigg own?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Huawei', isCorrect: false },
				{ answerText: 'Google', isCorrect: true },
				{ answerText: 'LG Chocolate', isCorrect: false },
			],
		},
		{
			questionText: 'Who is your favorite super hero?',
			answerOptions: [
				{ answerText: 'Trigg', isCorrect: false },
				{ answerText: '...Trigg', isCorrect: false },
				{ answerText: '.......Trigg', isCorrect: false },
				{ answerText: '............Trigg', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div className='quizzerContainer'>
		<div className='quizzer'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="qbutton" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}