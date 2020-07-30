import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';

import { Counter } from '../components/counter';
import { User } from '../components/user';

import { selectCounter, increment, decrement } from '../redux/counter';

export default function Home(props) {
	const { counter } = useSelector(selectCounter);
	console.log(counter);
	return (
		<div className={styles.container}>
			<Head>
				<title>Timestamp App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<User />
				<Counter />
				Capture your learning in time.
				<Link href='/login'>
					<a>Login</a>
				</Link>
				<Link href='/signup'>
					<a>Signup</a>
				</Link>
			</main>

			<footer className={styles.footer}>
				Copyright &copy; {new Date().getFullYear()} Brandon Corey Web
				Development
			</footer>
		</div>
	);
}
