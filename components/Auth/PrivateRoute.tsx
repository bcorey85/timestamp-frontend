import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import jwtDecode from 'jwt-decode';

import { AppLayout } from '../../components/AppLayout/AppLayout';

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
	const { userId } = router.query;

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

		const isAuthorized = user.userId === userId;

		if (!isAuthorized) {
			router.push(`/app/${user.userId}/dashboard`);
			return;
		}

		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <AppLayout>{null}</AppLayout>;
	}

	return <AppLayout>{children}</AppLayout>;
};

PrivateRoute.getInitialProps = async (context: NextPageContext) => {
	let query = context.query;
	return { query };
};

export { PrivateRoute };
