import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ApiRequest, ApiResponse } from '../api';

const useApiRequest = () => {
	const [ data, setData ] = useState(null);
	const [ errors, setErrors ] = useState([]);

	const apiRequest = async ({
		url,
		method,
		payload,
		token
	}: ApiRequest): Promise<AxiosResponse> => {
		setErrors([]);
		try {
			// const response = await axios[method](url, payload, {
			// 	headers: {
			// 		Authorization: 'Bearer ' + token
			// 	}
			// });

			const response = await axios.request({
				url,
				method,
				data: payload,
				headers: {
					Authorization: 'Bearer ' + token
				}
			});

			setData(response.data);
			return response.data;
		} catch (error) {
			setErrors(error.response.data.errors);
			return error.response.data;
		}
	};
	return [ apiRequest, data, errors ];
};

export { useApiRequest };
