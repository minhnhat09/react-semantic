import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFlashCards } from '../../_actions';
import TagComponent from '../TagComponent';

class FlashCardList extends React.Component {
	componentDidMount() {
		this.props.fetchFlashCards();
	}

	renderList() {
		return this.props.flashCards.map(fc => {
			return (
				<div className="card" key={fc.id}>
					<div className="content">
						<div className="ui feed">
							<div className="event">
								<div className="label">
									<i className="pencil alternate blue circle icon" />
									<i className="minus red circle icon" />
								</div>
								<div className="content">
									<div className="summary">Flash Card</div>
									<div>{fc.front}</div>
									<div>
										<TagComponent tags={fc.tags} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<div style={{ textAlign: 'left' }}>
					<Link to="/flash-cards/new" className="ui button primary">
						Create FlashCard
					</Link>
					<Link to="/flash-cards/compete" className="ui button danger">
						Compete
					</Link>
				</div>
				<br />
				<div className="ui cards">{this.renderList()}</div>
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
)(FlashCardList);
