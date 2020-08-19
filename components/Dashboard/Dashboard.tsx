import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user';

const Dashboard = (): JSX.Element => {
	const user = useSelector(selectUser);

	return <div>dashboard for ${user.userId}</div>;
};

export { Dashboard };
