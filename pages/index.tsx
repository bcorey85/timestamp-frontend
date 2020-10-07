import { Meta } from '../components/Meta/Meta';
import { Layout } from '../components/Landing/Layout/Layout';
import { Main } from '../components/Landing/Main/Main';

export default function Home(props) {
	return (
		<Layout>
			<Meta pageTitle='Home' />
			<Main />
		</Layout>
	);
}
