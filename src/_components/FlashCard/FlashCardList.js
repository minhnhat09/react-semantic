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
