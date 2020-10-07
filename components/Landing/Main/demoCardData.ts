import { Item } from '../../../utils/ItemService';

const demoProject: Item = {
	type: 'project',
	itemId: {
		userId: 1,
		projectId: 1,
		taskId: null,
		noteId: null
	},
	title: "I'm a Project",
	description:
		'Projects are the "big goals" of Timestamp. Start by creating one for any long-term goal that you want to achieve and get to work!',
	meta: {
		date: new Date().toISOString(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		hours: '1',
		startTime: null,
		endTime: null
	},
	pathname: {
		href: '',
		as: ''
	},
	pinned: true,
	tasks: 1,
	notes: 1
};

const demoTask: Item = {
	type: 'task',
	itemId: {
		userId: 1,
		projectId: 1,
		taskId: 1,
		noteId: null
	},
	title: "I'm a Task",
	description:
		'Tasks divide your Project into bite-sized chunks. They can help you stay organized, focused, and motivated to achieve your goals.',
	meta: {
		date: new Date().toISOString(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		hours: '1',
		startTime: null,
		endTime: null
	},
	pathname: {
		href: '',
		as: ''
	},
	pinned: true,
	tasks: 1,
	notes: 1,
	tags: '#demo,#task,#tags'
};

const demoNote: Item = {
	type: 'note',
	itemId: {
		userId: 1,
		projectId: 1,
		taskId: 1,
		noteId: 1
	},
	title: "I'm a Note",
	description:
		'Notes allow you to input daily progress towards your goals. They track how much time you invest each day and document your growth.',
	meta: {
		date: new Date().toISOString(),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		hours: '1',
		startTime: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
		endTime: new Date().toISOString()
	},
	pathname: {
		href: '',
		as: ''
	},
	pinned: true,
	tasks: 1,
	notes: 1,
	tags: '#demo,#note,#tags'
};

export { demoProject, demoTask, demoNote };
