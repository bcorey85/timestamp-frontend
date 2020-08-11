import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ApiRequest } from '../api';

const useApiRequest = () => {
	const [ data, setData ] = useState(null);
	const [ errors, setErrors ] = useState([]);

	const apiRequest = async ({
		url,
		method,
		payload,
		token
	}: ApiRequest): Promise<AxiosResponse> => {
		try {
			const response = await axios[method](url, payload, {
				headers: {
					Authorization: 'Bearer ' + token
				}
			});

			setData(response.data);
			return response.data;
		} catch (error) {
			setErrors(error.response.data.errors);
		}
	};
	return [ apiRequest, data, errors ];
};

export { useApiRequest };
