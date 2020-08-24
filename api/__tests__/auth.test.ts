import {
	signupApiConfig,
	loginApiConfig,
	forgotPasswordApiConfig,
	resetPasswordApiConfig
} from '../auth';

describe('Auth Api Configs', () => {
	it('returns a signup request config', () => {
		const config = signupApiConfig({
			email: 'test@gmail.com',
			password: '111111'
		});

		expect(config.url).toBe('http://localhost:5000/api/auth/signup');
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual({
			email: 'test@gmail.com',
			password: '111111'
		});
		expect(config.token).toBe(null);
	});

	it('returns a login request config', () => {
		const config = loginApiConfig({
			email: 'test@gmail.com',
			password: '111111'
		});

		expect(config.url).toBe('http://localhost:5000/api/auth/login');
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual({
			email: 'test@gmail.com',
			password: '111111'
		});
		expect(config.token).toBe(null);
	});

	it('returns a forgot password request config', () => {
		const config = forgotPasswordApiConfig('test@gmail.com');

		expect(config.url).toBe(
			'http://localhost:5000/api/auth/forgot-password'
		);
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual({
			email: 'test@gmail.com'
		});
		expect(config.token).toBe(null);
	});

	it('returns a reset password request config', () => {
		const config = resetPasswordApiConfig({
			password: 'newpassword',
			passwordConfirm: 'newpassword',
			token: 'token'
		});

		expect(config.url).toBe(
			'http://localhost:5000/api/auth/reset-password/token'
		);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual({
			password: 'newpassword',
			passwordConfirm: 'newpassword'
		});
		expect(config.token).toBe(null);
	});
});
