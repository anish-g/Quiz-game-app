import React, { Component } from 'react';
import app from './backend/base.js';
import Popup from './popup.js';
import './assets/style.css';
import questions from './quizService/questions.js'

class QuizGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: app.auth().currentUser.email,
			count: 0,
			totalQuestions: questions.length,
			ansSelected: false,
			ansSubmitted: false,
			selectedAnswer: '',
			score: 0,
			limitQuestions: 10,
			displayedQuestions: [],
			displayPopup: 'none'
		}
		this.randomQuestion = this.randomQuestion.bind(this);
		this.selectAnswer = this.selectAnswer.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
		this.submit = this.submit.bind(this);
	}

	pushQuestions(number) {
		const tempArr = this.state.displayedQuestions.concat(questions[number].questionId);
		this.setState({
			question: questions[number].question,
			answers: [questions[number].answers[0], questions[number].answers[1], questions[number].answers[2], questions[number].answers[3]],
			correct: questions[number].correct,
			count: this.state.count + 1,
			displayedQuestions: tempArr
		});
	}

	randomQuestion() {
		let rand = Math.floor(Math.random() * this.state.totalQuestions)
		if (this.state.displayedQuestions.indexOf(questions[rand].questionId) !== -1) {
			rand = Math.floor(Math.random() * this.state.totalQuestions);
		}
		return rand;
	}

	componentWillMount() {
		this.pushQuestions(this.randomQuestion());
	}

	showPopup = () => this.setState({ displayPopup: 'flex' });

	restart = () => {
		this.setState({
			score: 0,
			count: 1,
			displayedQuestions: [],
			displayPopup: 'none',
			ansSelected: false,
			ansSubmitted: false
		});
		this.clearOptions();
	}

	renderBtn() {
		if (this.state.ansSubmitted) {
			return <button className='fancyBtn' onClick={this.nextQuestion}>Next</button>
		} else {
			if (this.state.ansSelected) {
				return <button className='fancyBtn' onClick={this.submit}>Submit</button>
			} else {
				return <button className='fancyBtn disabled'>Submit</button >
			}
		}
	}

	clearOptions() {
		let options = document.getElementsByClassName('options');
		for (let k = 0; k < options.length; k++) {
			options[k].classList.remove('right', 'wrong', 'selected');
		}
	}

	nextQuestion() {
		let { count, limitQuestions } = this.state;
		if (count >= limitQuestions) {
			this.setState({ gameOver: true });
			this.showPopup();
		} else {
			this.pushQuestions(this.randomQuestion());
			this.setState({
				ansSelected: false,
				ansSubmitted: false
			});
			this.clearOptions();
		}
	}

	selectAnswer(e) {
		if (!this.state.ansSubmitted) {
			let elem = e.currentTarget.lastChild;
			let selectedId = e.currentTarget.dataset.id;
			this.setState({
				ansSelected: true,
				selectedAnswer: elem.innerText
			});
			let options = document.getElementsByClassName('options');
			for (let i = 0; i < options.length; i++) {
				options[i].dataset.id === selectedId ? options[i].classList.add('selected') : options[i].classList.remove('selected');
			}
		}
	}

	submit() {
		this.setState({
			ansSubmitted: true
		});
		let optionsTemp = document.getElementsByClassName('options');
		if (this.state.ansSelected) {
			if (this.state.selectedAnswer === this.state.correct) {
				this.setState({
					score: this.state.score + 1
				});
				for (let j = 0; j < optionsTemp.length; j++) {
					if (optionsTemp[j].lastChild.innerText === this.state.correct) {
						optionsTemp[j].classList.add('right');
					}
				}
			} else {
				for (let j = 0; j < optionsTemp.length; j++) {
					if (optionsTemp[j].lastChild.innerText === this.state.selectedAnswer) {
						optionsTemp[j].classList.add('wrong');
					}
					if (optionsTemp[j].lastChild.innerText === this.state.correct) {
						optionsTemp[j].classList.add('right');
					}
				}
			}
		}
	}

	render() {
		console.log(this.state.user)
		return (
			<div className='container'>
				<Popup style={{ display: this.state.displayPopup }} user={this.state.user} score={this.state.score} limitQuestions={this.state.limitQuestions} restart={this.restart} />
				<div className='header'>
					<div className='username'>
						<p> {this.state.user} </p>
					</div>
					<div className='title'>
						<h1>Quiz Game!</h1>
					</div>
					<div className='logout'>
						<a href='#' onClick={() => app.auth().signOut()}>Logout</a>
					</div>
				</div>
				<div className='quizBox'>
					<div className='row'>
						<div className='question'>
							<h4>{this.state.count}) {this.state.question}</h4>
						</div>
						<div className='answers'>
							<ul>
								<li onClick={this.selectAnswer} className='options' data-id='1'>
									<span>A</span>
									<p>{this.state.answers[0]}</p>
								</li>
								<li onClick={this.selectAnswer} className='options' data-id='2'>
									<span>B</span>
									<p>{this.state.answers[1]}</p>
								</li>
								<li onClick={this.selectAnswer} className='options' data-id='3'>
									<span>C</span>
									<p>{this.state.answers[2]}</p>
								</li>
								<li onClick={this.selectAnswer} className='options' data-id='4'>
									<span>D</span>
									<p>{this.state.answers[3]}</p>
								</li>
							</ul>
						</div>
						<div className='btn'>
							{this.renderBtn()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QuizGame;