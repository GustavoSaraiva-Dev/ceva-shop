import "../../styles/global.scss";
import { Header } from "../components/Header";
import styles from "../../styles/pages/home.module.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className={styles.wrapper}>
			<main>
				<div className={styles.global}>
					<div className={styles.homeContainer}>
						<Header />
						<Component {...pageProps} />
					</div>
				</div>
			</main>
		</div>
	);
}

export default MyApp;
