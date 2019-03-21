import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchResources, deleteResource } from '../../_actions';
import Algo4th from '../../_images/algorithm4th.png';
import Matthew from '../../_images/matthew.png';
import Kristy from '../../_images/kristy.png';
import Elyse from '../../_images/elyse.png';
import TagComponent from '../TagComponent';
import { history } from '../../_helpers';

class ResourceList extends React.Component {
	componentDidMount() {
		this.props.fetchResources();
	}

	onDelete = idResource => {
		this.props.deleteResource(idResource);
	};

	onEdit = idResource => {
		history.push(`/resources/edit/${idResource}`);
	};

	renderList() {
		let image = null;
		return this.props.resources.map((r, i) => {
			switch (r.category) {
				case 'git':
					image = Algo4th;
					break;
				case 'book':
					image = Matthew;
					break;
				case 'course':
					image = Kristy;
					break;
				case 'youtube':
					image = Elyse;
					break;

				default:
					break;
			}

			return (
				<div key={i} className="card">
					<div className="ui medium image">
						<img alt="" src={image} />
					</div>
					<div className="content">
						<div className="header">{r.name}</div>
						<div className="label">
							<i className="pencil alternate blue circle icon" onClick={() => this.onEdit(r._id)} />
							<i className="minus red circle icon" onClick={() => this.onDelete(r._id)}/>
						</div>
						<div className="description">{r.description}</div>
						<TagComponent tags={r.tags} />
					</div>
				</div>
			);
		});
	}

	render() {
		console.log(this.props.resources);
		return (
			<div>
				<div className="ui six doubling cards">{this.renderList()}</div>
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
	{ fetchResources, deleteResource }
)(ResourceList);
