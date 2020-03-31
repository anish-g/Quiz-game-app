import React from 'react';
import { app } from 'firebase';

class Popup extends React.Component {
	leaderboard() {
		const scoreList = this.props.scoreList();
		scoreList.sort().reverse();
		const listLeaderboard = scoreList.map(list => (
			<li><div className='leaderboardList'><span className='user'>{list.user}</span><span className='score'>{list.score}</span></div></li>
		))

		return listLeaderboard;
	}

	render() {
		return (
			<div className='popupContainer' style={this.props.style}>
				<div className='popupBox'>
					<div className='popupMessage'>
						<h4>Congratulations!</h4>
						<p>You scored:</p>
						<p className='score'>{this.props.score}/{this.props.limitQuestions}</p>
						<button className='fancyBtn popupBtn score' onClick={this.props.restart}>Restart</button>
					</div>
					<div className='leaderboard'>
						<span className='head'>Leaderboard</span>
						<ul>
							{this.leaderboard()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Popup;