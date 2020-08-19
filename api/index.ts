export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

interface Method {
	get: 'get';
	post: 'post';
	put: 'put';
	delete: 'delete';
}

export interface ApiRequest {
	url: string;
	method: keyof Method;
	payload?: object;
	token?: string;
}

export interface ApiError {
	message: string;
	field?: string;
}

export interface ApiResponse {
	success: boolean;
	data?: { [key: string]: any };
	errors?: Error[];
}
