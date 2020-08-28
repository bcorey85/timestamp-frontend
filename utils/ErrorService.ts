import { ApiError } from '../api/index';

interface Errors {
	generic: ApiError[];
	[key: string]: any;
}

class ErrorService {
	static formatErrors = (filterArray: string[], errorArray: ApiError[]) => {
		const errors: Errors = {
			generic: []
		};

		errorArray.map(err => {
			if (
				err.field &&
				filterArray.findIndex(filter => filter === err.field) > -1
			) {
				return (errors[err.field] = err.message);
			} else {
				errors.generic.push(err);
			}
		});

		return errors;
	};
}

export { ErrorService };
