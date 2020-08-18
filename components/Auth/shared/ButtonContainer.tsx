import styles from './ButtonContainer.module.scss';

const ButtonContainer = (props): JSX.Element => {
	return <div className={styles.btn_container}>{props.children}</div>;
};

export { ButtonContainer };
