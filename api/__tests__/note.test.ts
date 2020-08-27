import { createNoteApiConfig } from '../note';

describe('Auth Api Configs', () => {
	it('returns a project config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			projectId: 1,
			taskId: 1,
			start: new Date('1/2/2020'),
			end: new Date('1/2/2020'),
			tags: [ 'one', 'two' ],
			pinned: true
		};

		const config = createNoteApiConfig({
			payload,
			token,
			userId
		});

		expect(config.url).toBe(`http://localhost:5000/api/notes/${userId}`);
		expect(config.method).toBe('post');
		expect(config.payload).toStrictEqual({
			title: 'test',
			description: 'test description',
			projectId: 1,
			taskId: 1,
			start: new Date('1/2/2020'),
			end: new Date('1/2/2020'),
			tags: [ 'one', 'two' ],
			pinned: true
		});
		expect(config.token).toBe('123456');
	});
});
