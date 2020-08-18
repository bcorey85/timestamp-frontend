import styles from './AuthHeader.module.scss';

const AuthHeader = (props): JSX.Element => {
	return <hgroup className={styles.header}>{props.children}</hgroup>;
};
export { AuthHeader };
