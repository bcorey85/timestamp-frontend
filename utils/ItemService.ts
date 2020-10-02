import moment from 'moment';

export interface ApiItem {
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
	completedOn?: string;
	completedBy?: string;
}

interface Pathname {
	as: string;
	href: string;
}

export interface ItemMeta {
	date: string;
	startTime: string;
	endTime: string;
	hours: string;
	createdAt: string;
	updatedAt: string;
	completedOn?: string;
	completedBy?: string;
}

interface ItemIdentifier {
	userId: number;
	projectId: number;
	taskId?: number;
	noteId?: number;
}

export interface Item {
	itemId: ItemIdentifier;
	title: string;
	description: string;
	pinned: boolean;
	tags?: string;
	notes?: number;
	tasks?: number;
	type: keyof ItemType;
	pathname: Pathname;
	meta: ItemMeta;
}

export interface ItemType {
	project: 'project';
	task: 'task';
	note: 'note';
}

type ItemId = 'projectId' | 'taskId' | 'noteId';

class ItemService {
	public meta: ItemMeta = {
		date: null,
		startTime: null,
		endTime: null,
		hours: null,
		createdAt: null,
		updatedAt: null,
		completedOn: null,
		completedBy: null
	};
	public pathname: Pathname = { href: null, as: null };
	public type: keyof ItemType = null;

	constructor(public item: ApiItem) {
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
		const typeId = `${type}Id` as ItemId;
		const typeIdNumber = this.item[typeId];
		const rootPath = `${type}s`;
		const filePath = `${type}Id`;

		this.type = type;
		this.pathname = {
			href: `${rootPath}/[${filePath}]`,
			as: `${rootPath}/${typeIdNumber}`
		};

		this.meta = {
			date: this.item.startTime || this.item.createdAt,
			startTime: this.item.startTime || null,
			endTime: this.item.endTime || null,
			hours: this.item.hours,
			createdAt: this.item.createdAt,
			updatedAt: this.item.updatedAt,
			completedOn: this.item.completedOn || null,
			completedBy: this.item.completedBy || null
		};
	};

	public getFormattedItem = (): Item => {
		return {
			type: this.type,
			itemId: {
				userId: this.item.userId,
				projectId: this.item.projectId,
				taskId: this.item.taskId || null,
				noteId: this.item.noteId || null
			},
			title: this.item.title,
			description: this.item.description,
			tags: this.item.tags || null,
			pinned: this.item.pinned,
			notes: this.item.notes || 0,
			tasks: this.item.tasks || 0,
			pathname: this.pathname,
			meta: this.meta
		};
	};
}

export { ItemService };
