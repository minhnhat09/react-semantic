import React from 'react';
import Matthew from '../../_images/matthew.png';
class FastNoteList extends React.Component {
	render() {
		return (
			<div>
				<h3 class="ui header">Third header</h3>
				<div class="ui feed">
					<div className="event">
						<div className="label">
							<img src={Matthew} />
						</div>
						<div className="content">
							<div className="summary">
								<a>Joe Henderson</a> posted on his page
								<div className="date">3 days ago</div>
							</div>
							<div>
								Ours is a life of constant reruns. We're always circling back to where we'd we started,
								then starting all over again. Even if we don't run extra laps that day, we surely will
								come back for more of the same another day soon.
							</div>
							<div className="meta">
								<a className="like">
									<i className="like icon" /> 5 Likes
								</a>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		);
	}
}

export default FastNoteList;
