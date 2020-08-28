import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user';
import { useRouter } from 'next/router';

const useRouterService = () => {
	const { userId } = useSelector(selectUser);
	const nextRouter = useRouter();
	const query = nextRouter.query;

	const push = {
		dashboard: () =>
			nextRouter.push(
				'/app/[userId]/dashboard',
				`/app/${userId}/dashboard`
			),
		auth: () => nextRouter.push('/auth'),
		root: () => nextRouter.push('/')
	};

	const pushUnique = path => {
		return nextRouter.push(
			`/app/[userId]/${path}`,
			`/app/${userId}/${path}`
		);
	};

	const router = {
		push,
		pushUnique,
		query
	};

	return { router, nextRouter };
};

export { useRouterService };
