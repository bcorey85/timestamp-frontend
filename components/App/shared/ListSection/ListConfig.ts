const noteBtns = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title' },
	{ btnType: 'hide_mobile', filter: 'startTime', title: 'Start' },
	{ btnType: 'hide_mobile', filter: 'endTime', title: 'End' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours' },
	{ btnType: 'show_mobile', filter: 'pinned', title: 'Pin' }
];

const taskBtns = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title' },
	{ btnType: 'hide_mobile', filter: null, title: null },
	{ btnType: 'hide_mobile', filter: 'notes', title: 'Notes' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours' },
	{ btnType: 'show_mobile', filter: 'pinned', title: 'Pin' }
];

const projectBtns = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title' },
	{ btnType: 'hide_mobile', filter: 'notes', title: 'Notes' },
	{ btnType: 'hide_mobile', filter: 'tasks', title: 'Tasks' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours' },
	{ btnType: 'show_mobile', filter: 'pinned', title: 'Pin' }
];

export { noteBtns, taskBtns, projectBtns };
