import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ApiRequest } from '../api';

const useApiRequest = ({ url, method, payload, token }: ApiRequest) => {
	const [ data, setData ] = useState(null);
	const [ errors, setErrors ] = useState([]);

	const apiRequest = async (): Promise<AxiosResponse> => {
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
