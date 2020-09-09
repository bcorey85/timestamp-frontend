import { Meta } from '../components/Meta/Meta';
import { Layout } from '../components/Landing/Layout/Layout';

export default function Home(props) {
	return (
		<Layout>
			<Meta pageTitle='Home' />
			Capture your learning progress in time.
		</Layout>
	);
}
