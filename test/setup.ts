import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Item, ItemType } from '../utils/ItemService';
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
			createdAt: new Date(Date.now()).toISOString(),
			updatedAt: new Date(Date.now()).toISOString()
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
		(baseItem.meta.startTime = new Date(Date.now()).toISOString()),
			(baseItem.meta.endTime = new Date(Date.now()).toISOString()),
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
				createdAt: new Date(Date.now()).toISOString(),
				lastLogin: new Date(Date.now()).toISOString(),
				recentItems: {
					notes: [],
					tasks: [],
					projects: []
				}
			}
		})
	);
};
