import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../redux/user';
import Router from 'next/router';

interface Token {
	iat: number;
	user: string;
	expires: number;
}

const PrivateRoute = props => {
	const [ isLoading, setIsLoading ] = useState(true);
	const user = useSelector(selectUser);

	const dispatch = useDispatch();
	const { userid } = Router.query;

	useEffect(() => {
		const isAuthenticated = !!(user && user.token);

		if (!isAuthenticated) {
			dispatch(logout());
			Router.push('/auth');
			return;
		}

		const token: Token = jwtDecode(user.token);
		const expiredToken = token.expires < Date.now();

		if (expiredToken) {
			dispatch(logout());
			Router.push('/auth');
			return;
		}

		const isAuthorized = user.userId === userid;

		if (!isAuthorized) {
			Router.push(`/app/${user.userId}/dashboard`);
			return;
		}

		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <div> Loading...</div>;
	}

	return <React.Fragment>{props.children}</React.Fragment>;
};

PrivateRoute.getInitialProps = async context => {
	let query = context.query;
	return { query };
};

export { PrivateRoute };
