import { ApiItem, Item, ItemService } from './ItemService';

export interface ApiAppData {
	synced?: boolean;
	email: string;
	notes: ApiItem[];
	projects: ApiItem[];
	tasks: ApiItem[];
	hours: string;
	createdAt: string;
	lastLogin: string;
	recentItems: {
		notes: ApiItem[];
		tasks: ApiItem[];
		projects: ApiItem[];
	};
}

export interface FormattedAppData {
	synced?: boolean;
	email: string;
	notes: Item[];
	projects: Item[];
	tasks: Item[];
	hours: string;
	createdAt: string;
	lastLogin: string;
	recentItems: {
		notes: Item[];
		tasks: Item[];
		projects: Item[];
	};
}

class AppDataService {
	static formatItems = (appData: ApiAppData): FormattedAppData => {
		const formattedProjects = appData.projects.map(item =>
			new ItemService(item).getFormattedItem()
		);
		const formattedTasks = appData.tasks.map(item =>
			new ItemService(item).getFormattedItem()
		);
		const formattedNotes = appData.notes.map(item =>
			new ItemService(item).getFormattedItem()
		);
		const formattedRecentProjects = appData.recentItems.projects.map(item =>
			new ItemService(item).getFormattedItem()
		);
		const formattedRecentTasks = appData.recentItems.tasks.map(item =>
			new ItemService(item).getFormattedItem()
		);
		const formattedRecentNotes = appData.recentItems.notes.map(item =>
			new ItemService(item).getFormattedItem()
		);

		return {
			email: appData.email,
			projects: formattedProjects,
			tasks: formattedTasks,
			notes: formattedNotes,
			hours: appData.hours,
			createdAt: appData.createdAt,
			lastLogin: appData.lastLogin,
			recentItems: {
				projects: formattedRecentProjects,
				tasks: formattedRecentTasks,
				notes: formattedRecentNotes
			}
		};
	};
}

export { AppDataService };
