import React from 'react';
import { DateTimeService } from '../../../../../utils/DateTimeService';
import { ItemMeta } from '../../../../../utils/ItemService';
import { MathService } from '../../../../../utils/MathService';

interface Props {
	meta: ItemMeta;
}

const PinnedCardDate = ({ meta }: Props) => {
	const date =
		(meta.updatedAt && DateTimeService.formatDate(meta.updatedAt)) || null;
	const startTime =
		(meta.startTime && DateTimeService.formatTime(meta.startTime)) || null;
	const endTime =
		(meta.endTime && DateTimeService.formatTime(meta.endTime)) || null;
	const timeSpan = `${startTime} - ${endTime}`;
	const hours = `${MathService.round(meta.hours, 1)} hr`;

	return (
		<React.Fragment>
			<div>{date}</div>
			<div>{startTime && endTime ? timeSpan : hours}</div>
		</React.Fragment>
	);
};
export { PinnedCardDate };
