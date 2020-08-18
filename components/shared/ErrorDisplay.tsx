import styles from './ErrorDisplay.module.scss';

interface Error {
	message: string;
	field?: string;
}

interface Props {
	errors: Error[];
}

const ErrorDisplay = ({ errors }: Props): JSX.Element => {
	return (
		<div>
			{errors.map(error => {
				return (
					<p key={error.message} className={styles.error}>
						{error.message}
					</p>
				);
			})}
		</div>
	);
};

export { ErrorDisplay };
