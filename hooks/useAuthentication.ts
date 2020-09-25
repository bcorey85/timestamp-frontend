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

	const auth = {
		isAuthenticated: false,
		tokenExpired: null,
		isAuthorized: false,
		userId: null,
		token: null as Token
	};

	if (!user || !user.token) {
		return auth;
	}

	auth.token = jwtDecode(user.token);
	auth.userId = auth.token.user;

	auth.isAuthenticated = !!user.token;
	auth.tokenExpired = auth.token.exp * 1000 < Date.now();
	auth.isAuthorized =
		router.query && router.query.userId === auth.token.user.toString();

	return auth;
};

export { useAuthentication };
