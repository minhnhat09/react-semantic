import React from 'react';

const TagComponent = ({ tags }) => {
	const colors = [
		'red',
		'orange',
		'yellow',
		'olive',
		'green',
		'teal',
		'blue',
		'violet',
		'purple',
		'pink',
		'brown',
		'grey',
		'black',
	];
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
