import { Nav } from '../Nav/Nav';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<h2>Timestamp</h2>
			<Nav />
		</header>
	);
};

export { Header };
