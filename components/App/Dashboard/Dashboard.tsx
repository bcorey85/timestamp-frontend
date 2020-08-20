import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return <div>dashboard for ${userId}</div>;
};

export { Dashboard };
