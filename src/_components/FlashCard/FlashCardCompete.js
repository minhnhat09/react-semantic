import React from 'react';
import { connect } from 'react-redux';
import { fetchFlashCards } from '../../_actions';
import { Link } from 'react-router-dom';
class FlashCardCompete extends React.Component {
	componentDidMount() {
		this.props.fetchFlashCards();
	}

	renderCard() {
		return (
			<div class="ui placeholder segment">
				<div class="ui icon header">
					<i class="pdf file outline icon" />
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</div>
				<div className="extra content">
					<div className="ui three buttons">
						<button class="ui left teal labeled icon button">
							<i class="exchange icon" />
							Flip card
						</button>
						<button class="ui right green labeled icon button">
							<i class="right play icon" />
							I know it
						</button>
						<button class="ui right pink labeled icon button">
							<i class="right arrow icon" />
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
				{this.renderCard()}
				<br />
				<div style={{ textAlign: 'left' }}>
					<Link to="/flash-cards" className="ui red button">
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
