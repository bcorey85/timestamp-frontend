import moment from 'moment';

export interface Item {
	userId: number;
	projectId: number;
	taskId?: number;
	noteId?: number;
	title: string;
	description: string;
	hours: string;
	pinned: boolean;
	startTime?: string;
	endTime?: string;
	tags?: string;
	notes?: number;
	tasks?: number;
	createdAt: string;
	updatedAt: string;
}

export interface ItemType {
	project: 'project';
	task: 'task';
	note: 'note';
}

interface Pathname {
	as: string;
	href: string;
}

interface Meta {
	date: string;
	time?: string;
	startTime: string;
	endTime: string;
	hours: string;
}

class ItemService {
	public meta: Meta = {
		date: null,
		time: null,
		startTime: null,
		endTime: null,
		hours: null
	};
	public pathname: Pathname = { href: null, as: null };
	public type: keyof ItemType = null;

	constructor(public item: Item) {
		this.assignTypeProperties();
	}

	private assignTypeProperties = () => {
		const type = this.assignType();
		this.generateProperties(type);
	};

	private assignType = () => {
		const isNote = !!this.item.noteId && 'note';
		const isTask = !!this.item.taskId && !this.item.noteId && 'task';
		const isProject =
			!!this.item.projectId && !this.item.taskId && 'project';

		const type = [
			isNote,
			isTask,
			isProject
		].filter((type: string | boolean) => {
			return type !== false;
		})[0];

		return type as keyof ItemType;
	};

	private generateProperties = (type: keyof ItemType) => {
		// @ts-ignore
		const typeId: keyof Item = this.item[`${type}Id`];
		const rootPath = `${type}s`;
		const filePath = `${type}Id`;

		this.type = type;
		this.pathname = {
			href: `${rootPath}/[${filePath}]`,
			as: `${rootPath}/${typeId}`
		};

		if (type === 'note') {
			const date = moment(this.item.startTime).format('l');
			const startTime = moment(this.item.startTime).format('LT');
			const endTime = moment(this.item.endTime).format('LT');

			this.meta = {
				date,
				startTime,
				endTime,
				time: `${startTime} - ${endTime}`,
				hours: Number(this.item.hours).toFixed(1)
			};
		} else {
			const date = moment(this.item.updatedAt).format('l');

			this.meta = {
				date,
				startTime: null,
				endTime: null,
				time: null,
				hours: Number(this.item.hours).toFixed(1).toString()
			};
		}
	};

	public getItem = () => {
		return {
			date: this.meta.date,
			hours: this.meta.hours,
			startTime: this.meta.startTime,
			endTime: this.meta.endTime,
			title: this.item.title,
			description: this.item.description,
			tags: this.item.tags || null,
			pinned: this.item.pinned,
			createdAt: this.item.createdAt,
			notes: this.item.notes || null,
			tasks: this.item.tasks || null,
			href: this.pathname.href,
			as: this.pathname.as,
			type: this.type
		};
	};
}

export { ItemService };
