import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, selectCounter } from '../redux/counter';

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector(selectCounter);

	function dispatchInc() {
		dispatch(increment());
	}

	function dispatchDec() {
		dispatch(decrement());
	}

	return (
		<div>
			{count}
			<button onClick={dispatchInc}>Inc</button>
			<button onClick={dispatchDec}>Dec</button>
		</div>
	);
};

export { Counter };
