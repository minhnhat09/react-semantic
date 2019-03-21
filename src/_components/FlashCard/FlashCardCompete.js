import React from 'react';
import { connect } from 'react-redux';
import { fetchFlashCards } from '../../_actions';
import { Link } from 'react-router-dom';
class FlashCardCompete extends React.Component {
	state = {
		currentCard: null,
		toggleCard: true,
	};
	componentDidMount() {
		this.props.fetchFlashCards();
	}

	nextCard = () => {
		if (this.props.flashCards && this.props.flashCards.length > 0) {
			const currentCard = this.props.flashCards[Math.floor(Math.random() * this.props.flashCards.length)];
			this.setState({ currentCard });
		}
	};

	flipCard = () => {
		this.setState({ toggleCard: !this.state.toggleCard });
	};
	renderCardContent(currentCard) {
		if (currentCard) {
			if (this.state.toggleCard) {
				return (
					<div>
						Front of card
						<br />
						{currentCard.front}
					</div>
				);
			} else {
				return (
					<div>
						Back of card
						<br />
						{currentCard.back}
					</div>
				);
			}
		}
		return 'Chose a card...';
	}
	renderCard(currentCard) {
		let disabled = currentCard ? false : true;
		return (
			<div className="ui placeholder segment">
				<div className="ui icon header">
					Card id: {currentCard ? currentCard.id : ''}
					<i className="pdf file outline icon" />
					{this.renderCardContent(currentCard)}
				</div>
				<div className="extra content">
					<div className="ui three buttons">
						<button
							className={`ui ${disabled ? 'disabled ' : ' '}left teal labeled icon button`}
							onClick={this.flipCard}
						>
							<i className="exchange icon" />
							Flip card
						</button>
						<button className="ui right green labeled icon button">
							<i className="right play icon" />I know it
						</button>
						<button className="ui right pink labeled icon button" onClick={this.nextCard}>
							<i className="right arrow icon" />
							Next
						</button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderCard(this.state.currentCard)}
				<br />
				<div style={{ textAlign: 'left' }}>
					<Link to="/flashCards" className="ui red button">
						Return
					</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		flashCards: Object.values(state.flashCards),
	};
};
export default connect(
	mapStateToProps,
	{ fetchFlashCards }
)(FlashCardCompete);
