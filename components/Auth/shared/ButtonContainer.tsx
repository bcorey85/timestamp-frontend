import styles from './ButtonContainer.module.scss';

const ButtonContainer = props => {
	return <div className={styles.btn_container}>{props.children}</div>;
};

export { ButtonContainer };
