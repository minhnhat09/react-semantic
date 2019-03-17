import React from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../_actions';
import ReactMarkdown from 'react-markdown';
import TagComponent from '../TagComponent';
class BlogShow extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchBlog(id);
	}

	render() {
		if (!this.props.blog) {
			return <div>Loading...</div>;
		}

		const { title, content, tags } = this.props.blog;

		return (
			<div>
				<h1>{title}</h1>
				<TagComponent tags={tags} />
				<ReactMarkdown source={content} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { blog: state.blogs[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ fetchBlog }
)(BlogShow);
