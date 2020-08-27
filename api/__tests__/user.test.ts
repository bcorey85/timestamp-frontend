import {
	updateUserApiConfig,
	deleteUserApiConfig,
	getUserApiConfig
} from '../user';

describe('Auth Api Configs', () => {
	it('returns an update user request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			email: 'test@gmail.com',
			password: '111111',
			passwordConfirm: '1111111'
		};

		const config = updateUserApiConfig({
			payload,
			token,
			userId
		});

		expect(config.url).toBe(`http://localhost:5000/api/users/${userId}`);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual({
			email: 'test@gmail.com',
			password: '111111',
			passwordConfirm: '1111111'
		});
		expect(config.token).toBe('123456');
	});

	it('returns an delete user request config', () => {
		const userId = '123456';
		const token = '123456';

		const config = deleteUserApiConfig({ token, userId });

		expect(config.url).toBe(`http://localhost:5000/api/users/${userId}`);
		expect(config.method).toBe('delete');
		expect(config.payload).toStrictEqual(null);
		expect(config.token).toBe('123456');
	});

	it('returns a get user request config', () => {
		const userId = '123456';
		const token = '123456';

		const config = getUserApiConfig({ token, userId });

		expect(config.url).toBe(`http://localhost:5000/api/users/${userId}`);
		expect(config.method).toBe('get');
		expect(config.payload).toStrictEqual(null);
		expect(config.token).toBe('123456');
	});
});
