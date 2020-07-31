import axios from 'axios';
import { loginRequest, signupRequest } from '../auth';
import { ApiRequest } from '../index';

const mockRequest = async ({ url, method, payload, token }: ApiRequest) => {
	try {
		const response = await axios[method](url, payload, {
			headers: {
				Authorization: 'Bearer' + token
			}
		});
		return response;
	} catch (error) {
		return error.response;
	}
};

describe('Signup', () => {
	it('responds to test signup', async () => {
		const user = {
			email: 'bc@gmail.com',
			password: '123456'
		};

		const response = await mockRequest(signupRequest(user));
		expect(response.data).toEqual('hit signup');
	});

	it('returns error if invalid email', async () => {
		const user = {
			email: 'bc',
			password: '123456'
		};

		const response = await mockRequest(signupRequest(user));
		expect(response.data).toHaveProperty('errors');
		expect(response.data.errors[0].field).toEqual('email');
	});

	it('returns error if invalid password', async () => {
		const user = {
			email: 'bc@gmail.com',
			password: '123'
		};

		const response = await mockRequest(signupRequest(user));
		expect(response.data).toHaveProperty('errors');
		expect(response.data.errors[0].field).toEqual('password');
	});
});

describe('Login', () => {
	it('responds to test login', async () => {
		const user = {
			email: 'bc@gmail.com',
			password: '123456'
		};

		const response = await mockRequest(loginRequest(user));
		expect(response.data).toEqual('hit login');
	});
});
