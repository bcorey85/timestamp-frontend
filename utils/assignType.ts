import { IconType } from '../components/App/shared/TypeIcon';

const assignType = item => {
	const isNote = !!item.note_id;
	const isTask = !!item.task_id && !item.note_id;
	const isProject = !!item.project_id && !item.task_id;

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

export { assignType };
