import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFlashCards } from '../../_actions';

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
									<div className="summary">
										Ý tưởng làm app
										<div className="date">09:52</div>
									</div>
									<div>
										Ours is a life of constant reruns. We're always circling back to where we'd we
										started, then starting all over again. Even if we don't run extra laps that day,
										we surely will come back for more of the same another day soon.
									</div>
									<div>
										<i className="ui red tag label">algo</i>
										<i className="ui yellow tag label">data</i>
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
		console.log(this.props);
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
				<br/>
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
