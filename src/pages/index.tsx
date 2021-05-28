import styles from "../../styles/pages/home.module.scss";
import { Header } from "../components/Header";
import ShopContainer from "../components/ShopContainer";

export default function Home() {
	return (
		<div className={styles.global}>
			<div className={styles.homeContainer}>
				<Header />
				<ShopContainer />
			</div>
		</div>
	);
}
