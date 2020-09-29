import { createTestApiItem, createTestItem } from '../../test/setup';
import { ItemService } from '../ItemService';

describe('ItemService', () => {
	it('returns formatted item', () => {
		const item = createTestApiItem();

		const formattedItem = new ItemService(item).getFormattedItem();

		expect(formattedItem).toHaveProperty('type');

		expect(formattedItem).toHaveProperty('itemId');
		expect(formattedItem).toHaveProperty('pathname');
		expect(formattedItem).toHaveProperty('meta');
	});

	it('returns formatted project', () => {
		const item = createTestApiItem('project');

		const formattedItem = new ItemService(item).getFormattedItem();

		expect(formattedItem.type).toEqual('project');
	});

	it('returns formatted task', () => {
		const item = createTestApiItem('task');

		const formattedItem = new ItemService(item).getFormattedItem();

		expect(formattedItem.type).toEqual('task');
	});

	it('returns formatted note', () => {
		const item = createTestApiItem('note');

		const formattedItem = new ItemService(item).getFormattedItem();

		expect(formattedItem.type).toEqual('note');
	});
});
