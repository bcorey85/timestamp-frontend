import moment from 'moment';

export interface Item {
	user_id: number;
	project_id: number;
	task_id?: number;
	note_id?: number;
	title: string;
	description: string;
	hours: string;
	pinned: boolean;
	start_time?: Date;
	end_time?: Date;
	tags?: string;
	notes?: number;
	tasks?: number;
	created_at: Date;
	updated_at: Date;
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
		const isNote = !!this.item.note_id && 'note';
		const isTask = !!this.item.task_id && !this.item.note_id && 'task';
		const isProject =
			!!this.item.project_id && !this.item.task_id && 'project';

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
		const typeId: keyof Item = this.item[`${type}_id`];
		const rootPath = `${type}s`;
		const filePath = [ `${type}Id` ];

		this.type = type;
		this.pathname = {
			href: `${rootPath}/[${filePath}]`,
			as: `${rootPath}/${typeId}`
		};

		if (type === 'note') {
			const date = moment(this.item.start_time).format('l');
			const startTime = moment(this.item.start_time).format('LT');
			const endTime = moment(this.item.end_time).format('LT');

			this.meta = {
				date,
				startTime,
				endTime,
				time: `${startTime} - ${endTime}`,
				hours: Number(this.item.hours).toFixed(1)
			};
		} else {
			const date = moment(this.item.updated_at).format('l');

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
			pinned: this.item.pinned,
			createdAt: this.item.created_at,
			notes: this.item.notes || null,
			tasks: this.item.tasks || null,
			href: this.pathname.href,
			as: this.pathname.as,
			type: this.type
		};
	};
}

export { ItemService };
