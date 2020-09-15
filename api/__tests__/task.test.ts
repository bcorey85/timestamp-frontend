import {
	createTaskApiConfig,
	deleteTaskApiConfig,
	updateTaskApiConfig
} from '../task';

describe('Auth Api Configs', () => {
	it('returns a create task config request config', () => {
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

	it('returns an update task config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			projectId: 1,
			tags: [ 'one', 'two' ],
			pinned: true
		};

		const taskId = 1;

		const config = updateTaskApiConfig({
			taskId,
			payload,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/tasks/${userId}/${taskId}`
		);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});

	it('returns a delete task config request config', () => {
		const userId = '123456';
		const token = '123456';

		const taskId = 1;

		const config = deleteTaskApiConfig({
			taskId,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/tasks/${userId}/${taskId}`
		);
		expect(config.method).toBe('delete');
		expect(config.token).toBe('123456');
	});
});
