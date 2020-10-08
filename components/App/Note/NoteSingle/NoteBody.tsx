import React from 'react';

import { MathService } from '../../../../utils/MathService';
import { DateTimeService } from '../../../../utils/DateTimeService';
import { Item, ItemService } from '../../../../utils/ItemService';
import styles from './NoteBody.module.scss';

interface Props {
	currentNote: Item;
}

const NoteBody = ({ currentNote }: Props): JSX.Element => {
	const itemService = new ItemService();
	const description = itemService.getDescriptionHtml(currentNote.description);

	return (
		<div className={styles.note_container}>
			<div className={styles.note}>
				<div className={styles.note_header}>
					<div>
						{DateTimeService.formatDate(currentNote.meta.date)}
					</div>
					<div>
						{DateTimeService.formatTime(
							currentNote.meta.startTime
						)}{' '}
						- {DateTimeService.formatTime(currentNote.meta.endTime)}
					</div>
					<div>
						<p>{MathService.round(currentNote.meta.hours, 1)} hr</p>
					</div>
				</div>
				<div className={styles.note_body}>{description}</div>
			</div>
		</div>
	);
};

export { NoteBody };
