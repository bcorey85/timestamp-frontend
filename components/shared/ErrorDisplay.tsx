import styles from './ErrorDisplay.module.scss';

const ErrorDisplay = ({ errors }) => {
	return errors.map(error => {
		return (
			<p key={error} className={styles.error}>
				{error.message}
			</p>
		);
	});
};

export { ErrorDisplay };
