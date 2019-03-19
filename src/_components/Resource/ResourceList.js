import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchResources } from '../../_actions';
import Matthew from '../../_images/matthew.png';

class ResourceList extends React.Component {
	componentDidMount() {
		this.props.fetchResources();
	}

	renderList() {
		const avatars = [];
		avatars.push(1);
		avatars.push(2);
		avatars.push(3);
		avatars.push(3);
		return avatars.map((a, i) => {
			return (
				<div key={i} className="card">
					<div className="image">
						<img alt="" src={Matthew} />
					</div>
					<div className="content">
						<div className="header">Matt Giampietro</div>
						<div className="description">Matthew is an interior designer living in New York.</div>
					</div>
					<div className="extra content">
						<span className="right floated">Joined in 2013</span>
						<span>
							<i className="user icon" />
							75 Friends
						</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				ResourceList
				<div className="ui link cards">{this.renderList()}</div>
				<div style={{ textAlign: 'right' }}>
					<Link to="/resources/new" className="ui button primary">
						Create Resource
					</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		resources: Object.values(state.resources),
	};
};

export default connect(
	mapStateToProps,
	{ fetchResources }
)(ResourceList);
