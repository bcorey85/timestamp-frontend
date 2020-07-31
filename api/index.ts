export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export interface ApiRequest {
	url: string;
	method: string;
	payload?: {};
	token?: string;
}
