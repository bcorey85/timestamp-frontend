import React from 'react';
import { MathService } from '../../../../../utils/MathService';

const PinnedCardDate = ({
	date,
	time,
	hours
}: {
	date: string;
	time: string;
	hours: string;
}) => {
	return (
		<React.Fragment>
			<div>{date}</div>
			<div>{time ? time : `${MathService.round(hours, 1)} hr`}</div>
		</React.Fragment>
	);
};
export { PinnedCardDate };
