import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user';
import { useRouter } from 'next/router';

const useRouterService = () => {
	const { userId } = useSelector(selectUser);
	const nextRouter = useRouter();
	const query = nextRouter.query;

	// Fix issue with route changes using .push() not scrolling to top
	if (typeof window !== 'undefined' && nextRouter.events) {
		nextRouter.events.on('routeChangeComplete', () => {
			window.scrollTo(0, 0);
		});
	}

	const push = {
		dashboard: () =>
			nextRouter.push(
				'/app/[userId]/dashboard',
				`/app/${userId}/dashboard`
			),
		auth: () => nextRouter.push('/auth'),
		root: () => nextRouter.push('/'),
		search: () =>
			nextRouter.push('/app/[userId]/search', `/app/${userId}/search`)
	};

	const pushUnique = (path: string) => {
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
