import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFlashCards } from '../../_actions';

class FlashCardList extends React.Component {
	componentDidMount() {
		this.props.fetchFlashCards();
	}
	render() {
		return (
			<div>
				FlashCardList
				<div class="ui cards">
					<div class="card">
						<div class="content">
							<div class="ui feed">
								<div className="event">
									<div className="label">
										<i class="pencil alternate blue circle icon" />
										<i class="minus red circle icon" />
									</div>
									<div className="content">
										<div className="summary">
											Ý tưởng làm app
											<div className="date">09:52</div>
										</div>
										<div>
											Ours is a life of constant reruns. We're always circling back to where we'd
											we started, then starting all over again. Even if we don't run extra laps
											that day, we surely will come back for more of the same another day soon.
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
				</div>
				<div style={{ textAlign: 'right' }}>
					<Link to="/flash-cards/new" className="ui button primary">
						Create FlashCard
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: Object.values(state.projects),
	};
};

export default connect(
	mapStateToProps,
	{ fetchFlashCards }
)(FlashCardList);
