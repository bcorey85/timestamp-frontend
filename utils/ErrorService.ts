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
			const inFilterArray =
				err.field &&
				filterArray.findIndex(filter => filter === err.field) > -1;
			const uniqueGeneric =
				errors.generic.findIndex(e => e.message === err.message) === -1;

			if (inFilterArray) {
				return (errors[err.field] = err.message);
			} else if (uniqueGeneric) {
				errors.generic.push(err);
			}
		});

		return errors;
	};
}

export { ErrorService };
