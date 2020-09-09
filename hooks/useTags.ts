import React, { useState } from 'react';
import { TagService } from '../utils/TagService';

const useTags = (initialState: string[]) => {
	const [ tags, setTags ] = useState(initialState);

	const handleAddTag = (tagName: string) => {
		if (tags.includes(tagName)) {
			return;
		}
		setTags([ ...tags, TagService.trim(tagName) ]);
	};

	const handleRemoveTag = (tagName: string) => {
		setTags(tags.filter(tag => tag !== tagName));
	};

	return { tags, handleAddTag, handleRemoveTag };
};

export { useTags };
