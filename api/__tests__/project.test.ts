import {
	createProjectApiConfig,
	deleteProjectApiConfig,
	updateProjectApiConfig
} from '../project';

describe('Auth Api Configs', () => {
	it('returns a create project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			pinned: true
		};

		const config = createProjectApiConfig({
			payload,
			token,
			userId
		});

		expect(config.url).toBe(`http://localhost:5000/api/projects/${userId}`);
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});

	it('returns an update project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			pinned: true
		};

		const projectId = 1;

		const config = updateProjectApiConfig({
			projectId,
			payload,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/projects/${userId}/${projectId}`
		);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});

	it('returns a delete project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const projectId = 1;

		const config = deleteProjectApiConfig({
			projectId,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/projects/${userId}/${projectId}`
		);
		expect(config.method).toBe('delete');
		expect(config.token).toBe('123456');
	});
});
