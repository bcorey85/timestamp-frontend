import { IconType } from '../components/App/shared/TypeIcon';
import moment from 'moment';

interface ItemType {
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
	created_at: Date;
	updated_at: Date;
}

interface Pathname {
	as: string;
	href: string;
}

interface Meta {
	date: Date;
	time?: string;
}

class ItemService {
	public meta: Meta;
	public pathname: Pathname;
	public type: IconType;

	constructor(public item: ItemType) {
		this.type = this.assignType();
		this.pathname = this.generatePathNames();
		this.meta = this.formatDateTime();
	}

	private assignType = () => {
		const isNote = !!this.item.note_id;
		const isTask = !!this.item.task_id && !this.item.note_id;
		const isProject = !!this.item.project_id && !this.item.task_id;

		let type;

		if (isNote) {
			type = IconType.note;
		}

		if (isTask) {
			type = IconType.task;
		}

		if (isProject) {
			type = IconType.project;
		}

		return type;
	};

	private generatePathNames = () => {
		if (this.type === 'project') {
			return {
				href: 'projects/[projectId]',
				as: `projects/${this.item.project_id}`
			};
		}

		if (this.type === 'task') {
			return { href: 'tasks/[taskId]', as: `tasks/${this.item.task_id}` };
		}

		if (this.type === 'note') {
			return { href: 'notes/[noteId]', as: `notes/${this.item.note_id}` };
		}

		return { href: '', as: '' };
	};

	private formatDateTime = () => {
		let meta;
		if (this.type === IconType.note) {
			const date = moment(this.item.start_time).format('l');
			const startTime = moment(this.item.start_time).format('LT');
			const endTime = moment(this.item.end_time).format('LT');

			meta = {
				date,
				time: `${startTime} - ${endTime}`
			};
		} else {
			const date = moment(this.item.updated_at).format('l');

			meta = {
				date,
				time: null
			};
		}

		return meta;
	};
}

export { ItemService };
