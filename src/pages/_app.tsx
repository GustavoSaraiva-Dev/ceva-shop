import "../../styles/global.scss";
import { Header } from "../components/Header";
import styles from "../../styles/pages/home.module.scss";
import Breadcrumbs from "../components/Breadcrumbs";

function MyApp({ Component, pageProps }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Header />
			</div>
			<main>
				<Breadcrumbs />
				<Component {...pageProps} />
			</main>
		</div>
	);
}

export default MyApp;
