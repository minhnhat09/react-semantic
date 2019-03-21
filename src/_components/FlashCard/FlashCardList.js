import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFlashCards, deleteFlashCard } from '../../_actions';
import TagComponent from '../TagComponent';
import { history } from "../../_helpers";
class FlashCardList extends React.Component {
	componentDidMount() {
		this.props.fetchFlashCards();
	}
	onDelete = idFlashCard => {
		this.props.deleteFlashCard(idFlashCard);
	};

	onEdit = idFlashCard => {
		history.push(`/flashCards/edit/${idFlashCard}`);
	};

	renderList() {
		return this.props.flashCards.map(fc => {
			return (
				<div className="card" key={fc._id}>
					<div className="content">
						<div className="ui feed">
							<div className="event">
								<div className="label">
									<i
										className="pencil alternate blue circle icon"
										onClick={() => this.onEdit(fc._id)}
									/>
									<i className="minus red circle icon" onClick={() => this.onDelete(fc._id)} />
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
					<Link to="/flashCards/new" className="ui button primary">
						Create FlashCard
					</Link>
					<Link to="/flashCards/compete" className="ui button danger">
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
	console.log(state);
	return {
		flashCards: Object.values(state.flashCards),
	};
};

export default connect(
	mapStateToProps,
	{ fetchFlashCards, deleteFlashCard }
)(FlashCardList);
