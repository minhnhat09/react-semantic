import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { history } from "../../_helpers";
import { fetchBlog, deleteBlog } from '../../_actions';

class BlogDelete extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteBlog(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.blog) {
      return 'Are you sure you want to delete this blog?';
    }

    return `Are you sure you want to delete the blog with title: ${
      this.props.blog.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Blog"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { blog: state.blogs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchBlog, deleteBlog }
)(BlogDelete);
