import styles from './AuthHeader.module.scss';

const AuthHeader = props => {
	return <hgroup className={styles.header}>{props.children}</hgroup>;
};
export { AuthHeader };
