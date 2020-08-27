import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';

import { assignType } from '../../../../utils/assignType';
import { formatDateTime } from '../../../../utils/formatDateTime';
import { selectUser } from '../../../../redux/user';
import styles from './ListSection.module.scss';

interface Props {
	items: any[];
}

const ListSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	console.log(items);

	if (items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>No items to list</span>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{items.map(item => {
				const type = assignType(item);
				const meta = formatDateTime(item, type);

				return (
					<ListItem
						href='/app/[userId]/dashboard'
						as={`/app/${userId}/dashboard`}
						type={type}
						title={item.title}
						date={meta.date}
						time={meta.time}
						key={item.note_id}
					/>
				);
			})}
		</div>
	);
};

export { ListSection };
