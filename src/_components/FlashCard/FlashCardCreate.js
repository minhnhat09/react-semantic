import React from 'react';
import { connect } from 'react-redux';
import { createFlashCard } from '../../_actions';
import FlashCardForm from './FlashCardForm';

class FlashCardCreate extends React.Component {
	onSubmit = formValues => {
		console.log(formValues);
		this.props.createFlashCard(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a FlashCard</h3>
				<FlashCardForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createFlashCard }
)(FlashCardCreate);
