import { createProjectApiConfig } from '../project';

describe('Auth Api Configs', () => {
	it('returns a project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description'
		};

		const config = createProjectApiConfig({
			payload,
			token,
			userId
		});

		expect(config.url).toBe(`http://localhost:5000/api/projects/${userId}`);
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual({
			title: 'test',
			description: 'test description'
		});
		expect(config.token).toBe('123456');
	});
});
