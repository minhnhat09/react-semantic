import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../_actions";

class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderAdmin(blog) {
    if (blog.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/blogs/edit/${blog.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/blogs/delete/${blog.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.blogs.map(blog => {
      return (
        <div className="item" key={blog.id}>
          {this.renderAdmin(blog)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/blogs/${blog.id}`} className="header">
              {blog.title}
            </Link>
            <div className="description">{blog.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/blogs/new" className="ui button primary">
            Create Blog
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Blogs</h2>
        <div className="ui celled list">test</div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    blogs: Object.values(state.blogs),
    currentUserId: state.authentication.user.id,
    isSignedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogs }
)(BlogList);
