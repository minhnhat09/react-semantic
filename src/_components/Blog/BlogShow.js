import React from "react";
import { connect } from "react-redux";
import { fetchBlog } from "../../_actions";
import ReactMarkdown from "react-markdown";
import TagComponent from "../TagComponent";
import { Link } from 'react-router-dom';
class BlogShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlog(id);
  }

  render() {
    if (!this.props.blog) {
      return <div>Loading...</div>;
    }

    let { _id, title, content, tags } = this.props.blog;
    if (!tags) {
      tags = [];
    }
    return (
      <div>
        <h1>
          <Link to={`/blogs/edit/${_id}`}>{title}</Link>
        </h1>
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
