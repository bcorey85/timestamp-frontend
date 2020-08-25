import React, { useState } from 'react';

const useTags = () => {
	const [ tags, setTags ] = useState([]);

	const handleAddTag = (tagName: string) => {
		if (tags.includes(tagName)) {
			return;
		}
		setTags([ ...tags, tagName ]);
	};

	const handleRemoveTag = (tagName: string) => {
		setTags(tags.filter(tag => tag !== tagName));
	};

	return { tags, handleAddTag, handleRemoveTag };
};

export { useTags };
