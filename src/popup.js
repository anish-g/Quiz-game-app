import React from 'react';

class Popup extends React.Component {
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
						<span>Leaderboard</span>
						<ol>
							<li></li>
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default Popup;