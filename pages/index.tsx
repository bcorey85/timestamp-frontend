import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Timestamp App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
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
