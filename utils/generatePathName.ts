const generatePathName = (item: any, type: string) => {
	if (type === 'project') {
		return {
			href: 'projects/[projectId]',
			as: `projects/${item.project_id}`
		};
	}

	if (type === 'task') {
		return { href: 'tasks/[taskId]', as: `tasks/${item.task_id}` };
	}

	if (type === 'note') {
		return { href: 'notes/[noteId]', as: `notes/${item.note_id}` };
	}

	return { href: '', as: '' };
};

export { generatePathName };
