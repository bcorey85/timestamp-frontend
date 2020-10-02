export interface ButtonConfig {
	btnType: string;
	filter: string;
	title: string;
	align: 'left' | 'right' | 'center';
}

const noteBtns: ButtonConfig[] = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date', align: 'left' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title', align: 'left' },
	{
		btnType: 'hide_mobile',
		filter: 'startTime',
		title: 'Start',
		align: 'right'
	},
	{ btnType: 'hide_mobile', filter: 'endTime', title: 'End', align: 'right' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours', align: 'right' },
	{
		btnType: 'show_mobile',
		filter: 'pinned',
		title: 'Pinned',
		align: 'right'
	}
];

const taskBtns: ButtonConfig[] = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date', align: 'left' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title', align: 'left' },
	{ btnType: 'hide_mobile', filter: null, title: null, align: 'left' },
	{ btnType: 'hide_mobile', filter: 'notes', title: 'Notes', align: 'right' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours', align: 'right' },
	{
		btnType: 'show_mobile',
		filter: 'pinned',
		title: 'Pinned',
		align: 'right'
	}
];

const projectBtns: ButtonConfig[] = [
	{ btnType: 'show_mobile', filter: 'date', title: 'Date', align: 'left' },
	{ btnType: 'show_mobile', filter: 'title', title: 'Title', align: 'left' },
	{ btnType: 'hide_mobile', filter: 'tasks', title: 'Tasks', align: 'right' },
	{ btnType: 'hide_mobile', filter: 'notes', title: 'Notes', align: 'right' },
	{ btnType: 'hide_mobile', filter: 'hours', title: 'Hours', align: 'right' },
	{
		btnType: 'show_mobile',
		filter: 'pinned',
		title: 'Pinned',
		align: 'right'
	}
];

export { noteBtns, taskBtns, projectBtns };
