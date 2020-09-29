import { createTestApiItem, createTestItem } from '../../test/setup';
import { AppDataService } from '../AppDataService';

describe('AppDataService', () => {
	it('formats incoming items from api', () => {
		const apiPayload = {
			email: 'test@gmail.com',
			projects: [ createTestApiItem('project') ],
			tasks: [ createTestApiItem('task') ],
			notes: [ createTestApiItem('note') ],
			hours: '5.4',
			createdAt: new Date().toISOString(),
			lastLogin: new Date().toISOString(),
			recentItems: {
				projects: [ createTestApiItem('project') ],
				tasks: [ createTestApiItem('task') ],
				notes: [ createTestApiItem('note') ]
			}
		};

		const formattedPayload = AppDataService.formatItems(apiPayload);

		expect(formattedPayload.projects[0]).toHaveProperty('type');
		expect(formattedPayload.projects[0]).toHaveProperty('itemId');
		expect(formattedPayload.projects[0]).toHaveProperty('pathname');
		expect(formattedPayload.projects[0]).toHaveProperty('meta');

		expect(formattedPayload.tasks[0]).toHaveProperty('type');
		expect(formattedPayload.tasks[0]).toHaveProperty('itemId');
		expect(formattedPayload.tasks[0]).toHaveProperty('pathname');
		expect(formattedPayload.tasks[0]).toHaveProperty('meta');

		expect(formattedPayload.notes[0]).toHaveProperty('type');
		expect(formattedPayload.notes[0]).toHaveProperty('itemId');
		expect(formattedPayload.notes[0]).toHaveProperty('pathname');
		expect(formattedPayload.notes[0]).toHaveProperty('meta');

		expect(formattedPayload.recentItems.projects[0]).toHaveProperty('type');
		expect(formattedPayload.recentItems.projects[0]).toHaveProperty(
			'itemId'
		);
		expect(formattedPayload.recentItems.projects[0]).toHaveProperty(
			'pathname'
		);
		expect(formattedPayload.recentItems.projects[0]).toHaveProperty('meta');

		expect(formattedPayload.recentItems.tasks[0]).toHaveProperty('type');
		expect(formattedPayload.recentItems.tasks[0]).toHaveProperty('itemId');
		expect(formattedPayload.recentItems.tasks[0]).toHaveProperty(
			'pathname'
		);
		expect(formattedPayload.recentItems.tasks[0]).toHaveProperty('meta');

		expect(formattedPayload.recentItems.notes[0]).toHaveProperty('type');
		expect(formattedPayload.recentItems.notes[0]).toHaveProperty('itemId');
		expect(formattedPayload.recentItems.notes[0]).toHaveProperty(
			'pathname'
		);
		expect(formattedPayload.recentItems.notes[0]).toHaveProperty('meta');
	});
});
