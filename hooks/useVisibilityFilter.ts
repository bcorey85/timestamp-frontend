import { useState, useEffect } from 'react';
import { Item } from '../utils/ItemService';
import { useAppData } from './useAppData';

const useVisibilityFilter = () => {
	const [ selected, setSelected ] = useState<'completed' | 'active'>(
		'active'
	);
	const { appData } = useAppData();

	const [ visibleItems, setVisibleItems ] = useState({
		projects: [],
		tasks: [],
		notes: [],
		recentProjects: [],
		recentTasks: [],
		recentNotes: []
	});

	useEffect(
		() => {
			const projects = filterVisibleItems(appData.projects);
			const tasks = filterVisibleItems(appData.tasks);
			const notes = filterVisibleItems(appData.notes);
			const recentProjects = filterVisibleItems(appData.projects);
			const recentTasks = filterVisibleItems(appData.tasks);
			const recentNotes = filterVisibleItems(appData.notes);

			setVisibleItems({
				projects,
				tasks,
				notes,
				recentProjects,
				recentTasks,
				recentNotes
			});
		},
		[ appData, selected ]
	);

	const handleSelect = (selection: 'completed' | 'active') => {
		setSelected(selection);
	};

	const filterVisibleItems = (items: Item[]) => {
		let visibleItems;
		if (selected === 'completed') {
			visibleItems = items.filter(
				item => item && item.meta.completedOn !== null
			);
		} else {
			visibleItems = items.filter(
				item => item && item.meta.completedOn === null
			);
		}

		return visibleItems;
	};

	return {
		selected,
		handleSelect,
		visibleItems
	};
};

export { useVisibilityFilter };
