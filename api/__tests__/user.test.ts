import { updateUserApiConfig } from '../user';

describe('Auth Api Configs', () => {
	it('returns an update user request config', () => {
		const userId = '123456';

		const config = updateUserApiConfig(
			{
				email: 'test@gmail.com',
				password: '111111',
				passwordConfirm: '1111111'
			},
			userId
		);

		expect(config.url).toBe(`http://localhost:5000/api/user/${userId}`);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual({
			email: 'test@gmail.com',
			password: '111111',
			passwordConfirm: '1111111'
		});
		expect(config.token).toBe(null);
	});
});
