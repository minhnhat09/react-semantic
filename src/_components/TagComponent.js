import React from 'react';
import { colors } from '../_constants';
const TagComponent = ({ tags }) => {
	const renderTags = tags => {
		return tags.map((tag, i) => {
			const color = colors[Math.floor(Math.random() * colors.length)];
			return (
				<i key={i} className={`ui ${color} tag label`}>
					{tag}
				</i>
			);
		});
	};
	return (
		<div>
			{renderTags(tags)}
			<br />
		</div>
	);
};

export default TagComponent;
