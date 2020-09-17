import React from 'react';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { selectUser } from '../redux/user';
import { useRouterService } from './useRouterService';

interface Token {
	iat: number;
	user: string;
	exp: number;
}

const useAuthentication = () => {
	const user = useSelector(selectUser);
	const { router } = useRouterService();
	const { userId } = router.query;
	console.log(router.query);
	console.log(router);

	const isAuthenticated = !!(user && user.token);

	let token: Token;
	let tokenExpired;
	if (user.token) {
		token = jwtDecode(user.token);
		tokenExpired = token.exp * 1000 < Date.now();
	}

	console.log(typeof user.userId, typeof userId);

	const isAuthorized = user.userId && user.userId.toString() === userId;

	return { isAuthenticated, tokenExpired, isAuthorized };
};

export { useAuthentication };
