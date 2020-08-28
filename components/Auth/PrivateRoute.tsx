import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import jwtDecode from 'jwt-decode';

import { AppLayout } from '../../components/AppLayout/AppLayout';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../redux/user';
import { useRouter } from 'next/router';
import { Loading } from '../shared/Loading';
import { useRouterService } from '../../hooks/useRouterService';

interface Token {
	iat: number;
	user: string;
	exp: number;
}

interface Props {
	children?: any;
}

const PrivateRoute = ({ children }: Props) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const user = useSelector(selectUser);
	const { router } = useRouterService();

	const dispatch = useDispatch();
	const { userId } = router.query;

	useEffect(() => {
		const isAuthenticated = !!(user && user.token);

		if (!isAuthenticated) {
			dispatch(logout());
			router.push.auth();
			return;
		}

		const token: Token = jwtDecode(user.token);
		const expiredToken = token.exp * 1000 < Date.now();

		if (expiredToken) {
			dispatch(logout());
			router.push.auth();
			return;
		}

		const isAuthorized = user.userId === userId;

		if (!isAuthorized) {
			router.push.dashboard();
			return;
		}

		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<AppLayout>
				<Loading />
			</AppLayout>
		);
	}

	return <AppLayout>{children}</AppLayout>;
};

PrivateRoute.getInitialProps = async (context: NextPageContext) => {
	let query = context.query;
	console.log(query);

	return { query };
};

export { PrivateRoute };
