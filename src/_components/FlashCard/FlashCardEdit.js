import React from 'react';
import { connect } from 'react-redux';
import { fetchFlashCard, editFlashCard } from '../../_actions';
import FlashCardForm from './FlashCardForm';
import _ from 'lodash';
class FlashCardEdit extends React.Component {
	componentDidMount() {
		this.props.fetchFlashCard(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editFlashCard(this.props.match.params.id, formValues);
	};

	render() {
    
		if (!this.props.flashCard) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a FlashCard</h3>
				<FlashCardForm
					initialValues={_.pick(this.props.flashCard, 'front', 'back', 'category', 'subCategory', 'tags')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
  return { flashCard: state.flashCards[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ editFlashCard, fetchFlashCard }
)(FlashCardEdit);
