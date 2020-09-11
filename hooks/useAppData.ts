import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAppData, setAppData } from '../redux/appData';
import { useApiRequest } from './useApiRequest';
import { getUserApiConfig } from '../api/user';
import { selectUser } from '../redux/user';

const useAppData = () => {
	const appData = useSelector(selectAppData);
	const { userId, token } = useSelector(selectUser);
	const { request: appDataRequest, errors: appDataErrors } = useApiRequest();
	const dispatch = useDispatch();

	const fetchAppData = async () => {
		const config = getUserApiConfig({ userId, token });
		const res = await appDataRequest(config);

		if (res.success === false) {
			return appDataErrors;
		}

		if (res.success === true) {
			dispatch(setAppData({ appData: res.data.user }));
		}
	};

	return { appData, fetchAppData, appDataErrors };
};

export { useAppData };
