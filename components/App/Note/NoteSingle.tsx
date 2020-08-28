import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { StatCard } from '../shared/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import styles from './Note.module.scss';
import { useRouterService } from '../../../hooks/useRouterService';

const NoteSingle = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	const currentNote = appData.notes.filter(note => {
		return note.note_id === Number(router.query.noteId);
	})[0];

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading={currentNote.title}
					subheading='Note'
					subheadingType={IconType.note}
				/>
				<div className={styles.meta}>
					<p>{currentNote.description}</p>
					<p>Hours: {currentNote.hours}</p>
					<p>
						Started On:
						{new Date(
							Date.parse(currentNote.created_at)
						).toLocaleDateString()}
					</p>
				</div>

				{console.log(currentNote)}

				<div className={styles.btn_container}>
					<Button
						btnStyle='outline'
						onClick={() => router.pushUnique('create?action=note')}>
						<TypeIcon type={IconType.note} />
						Edit
					</Button>
				</div>
			</div>

			{/* <DashboardSection title='Tasks'>
				<ListSection
					items={appData.notes.filter(
						note => note.task_id === currentNote.task_id
					)}
				/>
			</DashboardSection> */}
		</div>
	);
};

export { NoteSingle };
