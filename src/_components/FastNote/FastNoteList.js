import React from 'react';
import Matthew from '../../_images/matthew.png';
class FastNoteList extends React.Component {
	render() {
		return (
			<div>
				<div class="ui feed">
					<h3 class="ui header">17/03/2019</h3>
					<div className="event" style={{ background: 'white' }}>
						<div className="label">
							<i class="pencil alternate blue circle icon" />
							<i class="minus red circle icon" />
						</div>
						<div className="content">
							<div className="summary">
								Ý tưởng làm app
								<div className="date">09:52</div>
							</div>
							<div>
								Ours is a life of constant reruns. We're always circling back to where we'd we started,
								then starting all over again. Even if we don't run extra laps that day, we surely will
								come back for more of the same another day soon.
							</div>
							<div>
								<i className="ui red tag label">algo</i>
								<i className="ui yellow tag label">data</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FastNoteList;
