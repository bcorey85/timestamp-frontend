import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ApiItem, Item, ItemType } from '../utils/ItemService';
import { setAppData } from '../redux/appData';
import { mockStore } from './__mocks__/mockRedux';

Enzyme.configure({ adapter: new Adapter() });

process.env.NEXT_PUBLIC_API_URL = 'http://localhost:5000/api';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useLayoutEffect: jest.requireActual('react').useEffect
}));

beforeEach(() => {
	jest.clearAllMocks();
});

export const createTestApiItem = (type?: keyof ItemType): ApiItem => {
	const baseItem = {
		userId: 1,
		projectId: 1,
		taskId: null as number,
		noteId: null as number,
		title: 'test',
		description: 'test',
		hours: '1.32',
		pinned: true,
		startTime: null as string,
		endTime: null as string,
		tags: null as string,
		notes: 1,
		tasks: 1,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	};

	if (type === 'task') {
		baseItem.taskId = 1;
		baseItem.tasks = null;
		baseItem.tags = '#1,#2';

		return baseItem;
	}

	if (type === 'note') {
		baseItem.taskId = 1;
		baseItem.noteId = 1;
		(baseItem.startTime = new Date().toISOString()),
			(baseItem.endTime = new Date().toISOString()),
			(baseItem.tasks = null);
		baseItem.notes = null;
		baseItem.tags = '#1,#2';

		return baseItem;
	}

	return baseItem;
};

export const createTestItem = (type?: keyof ItemType): Item => {
	const baseItem = {
		type: 'project' as keyof ItemType,
		itemId: {
			userId: 1,
			projectId: 1,
			taskId: null as number,
			noteId: null as number
		},
		pathname: {
			href: `/app/[userId]/`,
			as: `/app/1/`
		},
		meta: {
			date: '12/12/2020',
			startTime: null as string,
			endTime: null as string,
			hours: '1',
			time: '12:00pm',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		},
		title: 'test',
		description: 'test',
		notes: 5,
		tasks: 5,
		tags: null as string,
		pinned: false
	};

	if (type === 'task') {
		(baseItem.type = 'task' as keyof ItemType),
			(baseItem.itemId.taskId = 1);
		baseItem.tasks = null;
		baseItem.tags = '#1,#2';

		return baseItem;
	}

	if (type === 'note') {
		(baseItem.type = 'note' as keyof ItemType),
			(baseItem.itemId.taskId = 1);
		baseItem.itemId.noteId = 1;
		(baseItem.meta.startTime = new Date().toISOString()),
			(baseItem.meta.endTime = new Date().toISOString()),
			(baseItem.tasks = null);
		baseItem.notes = null;
		baseItem.tags = '#1,#2';

		return baseItem;
	}

	return baseItem;
};

export const createTestState = () => {
	mockStore.dispatch(
		setAppData({
			appData: {
				synced: true,
				email: 'test@gmail.com',
				notes: [ createTestItem('note') ],
				projects: [ createTestItem('project') ],
				tasks: [ createTestItem('task') ],
				hours: '5',
				createdAt: new Date().toISOString(),
				lastLogin: new Date().toISOString(),
				recentItems: {
					notes: [],
					tasks: [],
					projects: []
				}
			}
		})
	);
};
