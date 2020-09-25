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

	const isAuthenticated = !!(user && user.token);

	let token: Token;
	let tokenExpired: boolean;
	if (user.token) {
		token = jwtDecode(user.token);
		tokenExpired = token.exp * 1000 < Date.now();
	}

	const isAuthorized = user.userId && user.userId.toString() === userId;
	console.log('debugging auto logout');
	console.log('user.userid', user.userId);
	console.log('userId from state', userId);

	return { isAuthenticated, tokenExpired, isAuthorized, userId };
};

export { useAuthentication };
