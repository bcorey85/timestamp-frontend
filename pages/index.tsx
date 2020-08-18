import { useSelector } from 'react-redux';

import { Counter } from '../components/counter';
import { User } from '../components/user';
import { Meta } from '../components/Meta/Meta';

import { selectCounter } from '../redux/counter';

export default function Home(props) {
	const { counter } = useSelector(selectCounter);

	return (
		<div>
			<Meta pageTitle='Home' />
			<User />
			<Counter />
			Capture your learning in time.
		</div>
	);
}
