import { IconType } from '../components/App/shared/TypeIcon';

const formatDateTime = (item: any, type: string) => {
	let meta;
	if (type === IconType.note) {
		const start = new Date(Date.parse(item.start_time));
		const end = new Date(Date.parse(item.end_time));
		const date = start.toLocaleDateString();
		const startTime = start.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
		const endTime = end.toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});

		meta = {
			date,
			time: `${startTime} - ${endTime}`
		};
	} else {
		const date = new Date(Date.parse(item.updated_at)).toLocaleDateString();

		meta = {
			date,
			time: null
		};
	}

	return meta;
};

export { formatDateTime };
