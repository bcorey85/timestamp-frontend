import { createTaskApiConfig } from '../task';

describe('Auth Api Configs', () => {
	it('returns a project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			projectId: 1,
			tags: [ 'one', 'two' ],
			pinned: true
		};

		const config = createTaskApiConfig({
			payload,
			token,
			userId
		});

		expect(config.url).toBe(`http://localhost:5000/api/tasks/${userId}`);
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});
});
