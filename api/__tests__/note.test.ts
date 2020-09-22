import {
	createNoteApiConfig,
	deleteNoteApiConfig,
	updateNoteApiConfig
} from '../note';

describe('Auth Api Configs', () => {
	it('returns a create note config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			projectId: 1,
			taskId: 1,
			startTime: new Date('1/2/2020').toISOString(),
			endTime: new Date('1/2/2020').toISOString(),
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
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});

	it('returns an update note config request config', () => {
		const userId = '123456';
		const token = '123456';

		const payload = {
			title: 'test',
			description: 'test description',
			projectId: 1,
			taskId: 1,
			startTime: new Date('1/2/2020').toISOString(),
			endTime: new Date('1/2/2020').toISOString(),
			tags: [ 'one', 'two' ],
			pinned: true
		};

		const noteId = 1;

		const config = updateNoteApiConfig({
			noteId,
			payload,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/notes/${userId}/${noteId}`
		);
		expect(config.method).toBe('put');
		expect(config.payload).toStrictEqual(payload);
		expect(config.token).toBe('123456');
	});

	it('returns a delete note config request config', () => {
		const userId = '123456';
		const token = '123456';

		const noteId = 1;

		const config = deleteNoteApiConfig({
			noteId,
			token,
			userId
		});

		expect(config.url).toBe(
			`http://localhost:5000/api/notes/${userId}/${noteId}`
		);
		expect(config.method).toBe('delete');
		expect(config.token).toBe('123456');
	});
});
