import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
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
			<AppPageHeader>
				<AppPageTitle
					heading={currentNote.title}
					subheading='Note'
					subheadingType={IconType.note}>
					<AppPageMeta>
						<p>{currentNote.description}</p>
						<p>Hours: {currentNote.hours}</p>
						<p>
							Started On:
							{new Date(
								Date.parse(currentNote.created_at)
							).toLocaleDateString()}
						</p>
					</AppPageMeta>
				</AppPageTitle>

				<AppPageHeaderControls>
					<Button
						btnStyle='secondary'
						onClick={() => router.pushUnique('create?action=note')}>
						<TypeIcon type={IconType.note} />
						Edit Note
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>

			{/* <AppPageSection title='Tasks'>
				<ListSection
					items={appData.notes.filter(
						note => note.task_id === currentNote.task_id
					)}
				/>
			</AppPageSection> */}
		</div>
	);
};

export { NoteSingle };
