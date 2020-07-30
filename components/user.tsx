import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from '../redux/user';

const User = () => {
	const dispatch = useDispatch();
	const { userId, token, data } = useSelector(selectUser);
	const userIdVal = '2340912578klkj.faksjd';
	const tokenVal = '23kl4;j2;l3k4j;l2k3j4;l23kj;2l3kj4;l2k34j;2l3k4j';
	const dataVal = [ 'data1', 'data2', 'data3' ];

	function dispatchLogin() {
		dispatch(
			login({
				userId: userIdVal,
				token: tokenVal,
				data: dataVal
			})
		);
	}

	function dispatchLogout() {
		dispatch(logout());
	}

	return (
		<div>
			{userId}
			{token}
			{data && data.length > 0 ? (
				data.map(data => <div>{data}</div>)
			) : null}
			<button onClick={dispatchLogin}>Login</button>
			<button onClick={dispatchLogout}>Logout</button>
		</div>
	);
};

export { User };
