import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import jwtDecode from 'jwt-decode';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../redux/user';
import { useRouter } from 'next/router';

interface Token {
	iat: number;
	user: string;
	expires: number;
}

interface Props {
	children?: any;
}

const PrivateRoute = ({ children }: Props) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const user = useSelector(selectUser);
	const router = useRouter();

	const dispatch = useDispatch();
	const { userid } = router.query;

	useEffect(() => {
		const isAuthenticated = !!(user && user.token);

		if (!isAuthenticated) {
			dispatch(logout());
			router.push('/auth');
			return;
		}

		const token: Token = jwtDecode(user.token);
		const expiredToken = token.expires < Date.now();

		if (expiredToken) {
			dispatch(logout());
			router.push('/auth');
			return;
		}

		const isAuthorized = user.userId === userid;

		if (!isAuthorized) {
			router.push(`/app/${user.userId}/dashboard`);
			return;
		}

		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <div> Loading...</div>;
	}

	return <React.Fragment>{children}</React.Fragment>;
};

PrivateRoute.getInitialProps = async (context: NextPageContext) => {
	let query = context.query;
	return { query };
};

export { PrivateRoute };
