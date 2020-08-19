import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

process.env.NEXT_PUBLIC_API_URL = 'http://localhost:5000/api';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useLayoutEffect: jest.requireActual('react').useEffect
}));

beforeEach(() => {
	jest.clearAllMocks();
});
