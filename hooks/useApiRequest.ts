import { useState } from 'react';
import axios from 'axios';
import { ApiRequest, ApiResponse } from '../api';

const useApiRequest = () => {
	const [ data, setData ] = useState(null);
	const [ errors, setErrors ] = useState([]);

	const request = async ({
		url,
		method,
		payload,
		token
	}: ApiRequest): Promise<ApiResponse> => {
		setErrors([]);

		try {
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

	return {
		request,
		data,
		errors
	};
};

export { useApiRequest };
