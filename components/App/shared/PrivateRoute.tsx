import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';

import { AppLayout } from '../AppLayout/AppLayout';

import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/user';
import { Loading } from '../../shared/Loading/Loading';
import { useRouterService } from '../../../hooks/useRouterService';
import { useAuthentication } from '../../../hooks/useAuthentication';

interface Props {
	children?: any;
}

const PrivateRoute = ({ children }: Props) => {
	const { router } = useRouterService();
	const [ isLoading, setIsLoading ] = useState(true);
	const { isAuthenticated, tokenExpired, isAuthorized } = useAuthentication();

	const dispatch = useDispatch();

	useEffect(() => {
		if (!isAuthenticated || tokenExpired || !isAuthorized) {
			dispatch(logout());
			router.push.auth();
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
	return { query };
};

export { PrivateRoute };
