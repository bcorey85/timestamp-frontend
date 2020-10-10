import React from 'react';

import { TagService } from '../../../../../utils/TagService';

const PinnedCardTags = ({ tags }: { tags: string }): JSX.Element => {
	return (
		<div>
			{tags && tags.length > 24 ? (
				TagService.addSpaces(tags).substring(0, 24) + '...'
			) : (
				TagService.addSpaces(tags)
			)}
			{!tags || tags.length === 0 ? '( No Tags )' : null}
		</div>
	);
};

export { PinnedCardTags };
