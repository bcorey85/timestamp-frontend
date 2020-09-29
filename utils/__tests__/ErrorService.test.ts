import { ApiError } from '../../api';
import { ErrorService } from '../ErrorService';

describe('ErrorService', () => {
	it('formats errors from api', () => {
		const errors: ApiError[] = [
			{ message: 'Invalid Password', field: 'password' },
			{ message: 'Invalid Email', field: 'email' },
			{ message: 'Server Error' }
		];

		const formattedErrors = ErrorService.formatErrors(
			[ 'email', 'password' ],
			errors
		);

		expect(formattedErrors.password).toBe('Invalid Password');
		expect(formattedErrors.email).toBe('Invalid Email');
		expect(formattedErrors.generic.length).toBe(1);
		expect(formattedErrors.generic[0].message).toBe('Server Error');
	});
});
