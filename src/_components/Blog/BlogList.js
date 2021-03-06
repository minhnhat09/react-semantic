import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../_actions';
import SearchBar from '../SearchBar';

class BlogList extends React.Component {
	state = { blogFilters: [] };
	componentDidMount() {
		this.props.fetchBlogs();
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/blogs/new" className="ui button primary">
						Create Blog
					</Link>
				</div>
			);
		}
	}

	renderAdmin(blog) {
		if (blog.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/blogs/edit/${blog._id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`/blogs/delete/${blog._id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}

	renderList() {
		if (this.state.blogFilters && this.state.blogFilters.length === 0) {
			return this.renderListBlog(this.props.blogs);
		}
		return this.renderListBlog(this.state.blogFilters);
	}

	renderListBlog(blogs) {
		return blogs.map(blog => {
			return (
				<div className="item" key={blog._id}>
					{this.renderAdmin(blog)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<Link to={`/blogs/${blog._id}`} className="header">
							{blog.title}
						</Link>
						<div className="description">{blog.category}</div>
					</div>
				</div>
			);
		});
	}

	onTermSubmit = term => {
		let blogFilters = this.props.blogs;
		if (term && term.trim() !== '') {
			blogFilters = blogFilters.filter(blog => blog.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
		}
		this.setState({
			blogFilters,
		});
	};

	render() {
		return (
			<div>
				<h2>Blogs</h2>
				<SearchBar label="Search Blog" onFormSubmit={this.onTermSubmit} />
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		blogs: Object.values(state.blogs),
		currentUserId: state.authentication.user.id,
		isSignedIn: state.authentication.loggedIn,
	};
};

export default connect(
	mapStateToProps,
	{ fetchBlogs }
)(BlogList);
